import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import React, { FC } from 'react';
import Login from './component/Login';
import Register from './component/Register';

interface AuthProps {
}

const Auth: FC<AuthProps> = (props) => {
    return <section>
        <Login />
        <hr />
        <Register />
    </section>
}

export default Auth 