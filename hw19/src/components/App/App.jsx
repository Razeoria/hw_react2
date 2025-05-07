import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';

import './App.css';

const { Title } = Typography;

function App() {
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [submitted, setSubmitted] = useState(null);
  const [form] = Form.useForm();

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFinish = () => {
    setSubmitted(formData);
    form.resetFields();
  };

  return (
    <main style={{ padding: '24px', maxWidth: '620px', margin: '0 auto' }}>
      <Title level={2}>Анкета с Ant Design</Title>

      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Ваше имя"
          name="name"
          rules={[{ required: true, message: 'Пожалуйста, введите имя!' }]}
        >
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Напишите имя"
          />
        </Form.Item>

        <Form.Item
          label="Краткое описание"
          name="description"
          rules={[{ required: true, message: 'Пожалуйста, введите описание!' }]}
        >
          <Input
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Напишите описание"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
        </Form.Item>
      </Form>

      {submitted && (
        <Card style={{ marginTop: '24px' }}>
          <Title level={4}>Результат:</Title>
          <p><strong>Имя:</strong> {submitted.name}</p>
          <p><strong>Описание:</strong> {submitted.description}</p>
        </Card>
      )}
    </main>
  );
}

export default App;
