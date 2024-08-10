import { ValidateErrorEntity } from 'rc-field-form/lib/interface';

import React, { FC } from 'react';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import * as apiRequest from "../../../api/api.tsx";

interface RegisterProps {
}

const Register: FC<RegisterProps> = (props) => {
    const [api, contextHolder] = notification.useNotification();

    const onFinish = async (values: any) => {
        try{
            await apiRequest.register(
                values.username,
                values.password,
                values.email
            );

            api['success']({
                message: "Success",
                description: "You have successfully registered. You can now login."
            })
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

    return <div>
        {contextHolder}

        <h1>Register</h1>
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
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Input your username.',
                    },
                ]}
            >
                <Input />
            </Form.Item>

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
    </div>
}

export default Register 