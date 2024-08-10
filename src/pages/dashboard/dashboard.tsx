import React from 'react';
import { Button } from 'antd';
import * as localStorageUtils from '../../utils/localStorage';

interface DashboardProps {
}

const Dashboard: React.FC<DashboardProps> = (props) => {

    const clickHandler = () => {
        const token = localStorageUtils.get("token");

        console.log(token);
    }

    return <section>
        bonjour depuis le dashboard
        <Button onClick={clickHandler}>
            Click me
        </Button>
    </section>
}

export default Dashboard;