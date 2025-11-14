'use client'

import { useEffect, useState } from 'react'

import { MessageOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, Typography, message as antMessage } from 'antd'
import { useModal } from '@shared/context/ModalProvider'
import Icon from '@shared/ui/Icon/Icon'

const { Title } = Typography

type ContactFormType = {
  bot?: string
}

interface FormData {
  name: string
  email: string
  phone: string
  // message: string
}

export default function ContactForm({ bot }: ContactFormType) {
  const [form] = Form.useForm()
  const {closeModal} = useModal()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    console.log(form)
  }, [form])

  const onFinish = async (values: FormData) => {
    setLoading(true)
    console.log(values)

    try {
      const response = await fetch('/api/sheets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const result = await response.json()

      if (response.ok) {
        antMessage.success('Данные успешно отправлены!')
        form.resetFields()
        closeModal()
      } else {
        antMessage.error(`Ошибка: ${result.error}`)
      }
    } catch (error) {
      antMessage.error('Произошла ошибка при отправке')
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card
      style={{ maxWidth: 500, margin: '40px auto' }}
      headStyle={{ textAlign: 'center' }}
      title={
        <Title level={2} style={{ margin: 0 }}>
          Контактная форма
        </Title>
      }
    >
      <Form
        form={form}
        name="contact-form"
        onFinish={onFinish}
        layout="vertical"
        requiredMark="optional"
        initialValues={{
          name: '',
          phone: '',
          bot: bot ? bot : 'Не выбран',
        }}
      >
        <Form.Item
          label="Имя"
          name="name"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите ваше имя!',
            },
            {
              min: 2,
              message: 'Имя должно содержать минимум 2 символа!',
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Введите ваше имя" size="large" />
        </Form.Item>

        <Form.Item
          label="Номер телефона"
          name="phone"
          rules={[
            { required: true, message: 'Введите номер телефона!' },
            {
              pattern: /^\+?\d{10,15}$/,
              message: 'Введите корректный номер телефона (10–15 цифр)',
            },
          ]}
        >
          <Input prefix={<Icon name='phone'/>} placeholder="+996 700 123 456" />
        </Form.Item>
        <Form.Item name="bot" hidden>
          <Input />
        </Form.Item>

        {/* <Form.Item
          label="Сообщение"
          name="message"
          rules={[
            {
              max: 500,
              message: 'Сообщение не должно превышать 500 символов!',
            },
          ]}
        >
          <TextArea rows={4} placeholder="Введите ваше сообщение" size="large" showCount maxLength={500} />
        </Form.Item> */}

        <Form.Item>
          <Button htmlType="submit" loading={loading} size="large" block icon={<MessageOutlined />}>
            {loading ? 'Отправка...' : 'Отправить'}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}
