import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { useNavigate } from "react-router-dom";
import React, { FC } from 'react';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import * as localStorageUtils from "../../../utils/localStorage.ts";
import * as apiRequest from "../../../api/api.tsx";

interface LoginProps {
}

const Login: FC<LoginProps> = (props) => {
    const [api, contextHolder] = notification.useNotification();

    const navigate = useNavigate();

    const onFinish = async (values: any) => {
        try {
            const res = await apiRequest.login(
                values.email,
                values.password
            );

            if (res.status === 200) {
                api['success']({
                    message: "Success",
                    description: "Login success"
                })
            }

            apiRequest.setAuthToken(res.data.token);
            localStorageUtils.add("token", res.data.token);

            navigate('/');
        } catch (e: any) {
            onFinishFailed(e.response.data);
        }
    }

    const onFinishFailed = (errorInfo: string) => {
        api['error']({
            message: "Erreur",
            description: errorInfo
        })
    }

    return <section>
        {contextHolder}

        <h1>Login</h1>
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Input your email.',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Input your password',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </section>
}

export default Login 