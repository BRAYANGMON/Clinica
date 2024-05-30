import { Button, Space } from "antd";

const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Cedula',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Correo',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Celular',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Fecha de nacimiento',
      dataIndex: 'dateOfBirth',
      key: 'dateOfBirth',
    },
    {
      title: 'Dirección',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Rol',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Nombre de usuario',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Contraseña',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'Acciones',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type='link'>Editar</Button>
        </Space>
      ),
    },
  ];
  const data = [
    {
        name: "Ana García",
        id: "123456789",
        email: "ana.garcia@email.com",
        phoneNumber: "3001234567",
        dateOfBirth: "1990-05-15",
        address: "Calle 123, Medellín",
        role: "User",
        username: "ana_garcia",
        password: "MySecurePassword123"
    },
    {
        name: "Carlos López",
        id: "987654321",
        email: "carlos.lopez@email.com",
        phoneNumber: "3109876543",
        dateOfBirth: "1985-09-20",
        address: "Carrera 456, Bogotá",
        role: "Administrator",
        username: "carlos_lopez",
        password: "Secure2024!"
    },
    {
        name: "María Rodríguez",
        id: "567890123",
        email: "maria.rodriguez@email.com",
        phoneNumber: "3205678901",
        dateOfBirth: "1998-03-10",
        address: "Avenida 789, Cali",
        role: "User",
        username: "maria_rodriguez",
        password: "Butterfly#123"
    },
    {
        name: "Juan Pérez",
        id: "234567890",
        email: "juan.perez@email.com",
        phoneNumber: "3502345678",
        dateOfBirth: "1982-11-05",
        address: "Diagonal 567, Barranquilla",
        role: "User",
        username: "juan_perez",
        password: "P@ssw0rd"
    },
    {
        name: "Laura Gómez",
        id: "345678901",
        email: "laura.gomez@email.com",
        phoneNumber: "3603456789",
        dateOfBirth: "1995-07-25",
        address: "Plaza 678, Cartagena",
        role: "User",
        username: "laura_gomez",
        password: "Secret567"
    }
  ]

  export {columns, data};