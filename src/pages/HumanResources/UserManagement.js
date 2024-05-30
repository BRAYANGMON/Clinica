import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Modal, Select, Table, message } from 'antd';
import { columns, data } from '../../utils/users';

const UserManagment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Agregar Usuario
      </Button>
      <Modal title="Agregar Usuario" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} centered>
        <Form layout='vertical'  onFinish={onFinish}>
          <Form.Item label='Nombre' name={'name'} rules={[{required: true, message:'el campo no debe de estar vacío'}]}>
            <Input />
          </Form.Item>
          <Form.Item label='Cedula' name={'id'} rules={[{required: true, message:'el campo no debe de estar vacío'}]}>
            <Input min={1} max={10}/>
          </Form.Item>
          <Form.Item label='Correo Electronico'name={'email'} rules={[{required: true, type: 'email', message:'el campo no debe de estar vacío'}]}>
            <Input/>            
          </Form.Item>
          <Form.Item label='Celular' name={'numberPhone'} rules={[{required: true, message:'el campo no debe de estar vacío'}]}>
            <Input min={1} max={10} />
          </Form.Item>
          <Form.Item label='Fecha de nacimiento'name={'birthdate'}rules={[{required: true, message:'el campo no debe de estar vacío'}]}>
            <DatePicker/>
          </Form.Item>
          <Form.Item label='Direccion' name={'addres'} rules={[{required: true, message:'el campo no debe de estar vacío'}]}>
            <Input/>
          </Form.Item>
          <Form.Item label='Role' neme={'role'} rules={[{required: true, message:'el campo no debe de estar Vacío'}]}>
            <Select options={[{value:'Personal aAministrativo', label:'Personal Administrativo'},{value:'Recursos Humanos',label:'Recursos humanos'},{value:'Emfermeras',label:'Enfermeras'},{value:'Medicos',label:'Medicos'}]}/>
          </Form.Item>
          <Form.Item label='usuario'name={'userneme'} rules={[{required: true, message:'el campo no debe de estar vacío'}]}>
            <Input/>
          </Form.Item>
          <Form.Item label='contraseña'name={'password'} rules={[{required: true, message:'el campo no debe de estar vacío'}]}>
            <Input.Password/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
             Agregar
            </Button>
          </Form.Item>
        </Form>
        
      </Modal>
      <Table columns={columns} dataSource={data} />

    </>
  )
} 
export default UserManagment;