import React from 'react';
import { Button } from 'antd';
import * as localStorageUtils from '../../utils/localStorage';
import * as apiRequest from '../../api/api';
import { useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Skeleton } from 'antd';
import { User } from '../../model/user';
import { Pokemon } from '../../model/pokemon';

import Table from './component/Table';


interface DashboardProps {
}

const Dashboard: React.FC<DashboardProps> = (props) => {
    const [user, setUser] = useState<User>();
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const token:string | null = localStorageUtils.get("token");

        if (!token) {
            navigate('/auth');
        }

        (async () =>  {
            try {
                apiRequest.setAuthToken(token!);
                const res = await apiRequest.getMyUser();

                setUser(res.data);
                setLoading(false);
            }catch(e: any) {
                console.error(e);
            }
        })();

    }, []);

    return <section>
        <h1>My user profile</h1>

        {loading ? <Skeleton active /> : <div>
            <p>Id: {user?.id}</p>
            <p>Username: {user?.name}</p>
            <p>Email: {user?.email}</p>
            

            <Table />


        </div>}

    </section>
}

export default Dashboard;