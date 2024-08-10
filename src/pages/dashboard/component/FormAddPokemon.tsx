import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import * as apiRequest from '../../../api/api';
import { Form, Button, Input } from 'antd';
import React, { useState, useEffect, FC } from 'react';

interface FormAddPokemonProps {
  setPokemonList: React.Dispatch<any>
}

const FormAddPokemon: FC<FormAddPokemonProps> = (prop) => {
  const [data, setData] = useState<any>();

  const onFinish = async (values: any) => {
    try {
      const res = await apiRequest.addPokemon(values.name, values.type, values.health);
      prop.setPokemonList((previous: any) => [...previous, res.data]);
    } catch (e: any) {
      console.log(e.message);
    }
  }

  return <div>
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
        label="Pokemon name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Pokemon Health"
        name="health"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Pokemon type"
        name="type"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input />
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

export default FormAddPokemon;