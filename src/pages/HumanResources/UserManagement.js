import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Modal, Select, Table } from 'antd';
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
          <Form.Item label='Cedula' name={'id'}>
            <Input min={1} max={10}/>
          </Form.Item>
          <Form.Item label='Correo Electronico' required rules={[{type: 'email'}]}>
            <Input/>            
          </Form.Item>
          <Form.Item label='Celular' required>
            <Input min={1} max={10} />
          </Form.Item>
          <Form.Item label='Fecha de nacimiento'required>
            <DatePicker/>
          </Form.Item>
          <Form.Item label='Direccion' required>
            <Input/>
          </Form.Item>
          <Form.Item label='Role' required>
            <Select options={[{value:'Personal aAministrativo', label:'Personal Administrativo'},{value:'Recursos Humanos',label:'Recursos humanos'},{value:'Emfermeras',label:'Enfermeras'},{value:'Medicos',label:'Medicos'}]}/>
          </Form.Item>
          <Form.Item label='usuario'required>
            <Input/>
          </Form.Item>
          <Form.Item label='contraseña'required>
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