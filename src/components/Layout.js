import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import ManagementPacientes from '../pages/doctor/ManagementPacientes';
import ClinicalHistory from '../pages/doctor/ClinicalHistory';
import PrescribeOrders from '../pages/doctor/PrescribeOrders';
import ResultsDiacnosticAids from '../pages/doctor/ResultsDiacnosticAids';
import VitalSignsRecords from '../pages/nurses/VitalSignsRecords';
import MedicationAdministration from '../pages/nurses/MedicationAdministration';
import ProcessRecord from '../pages/nurses/ProcessRecord';
import VicitiesNuerces from '../pages/nurses/VicitiesNuerces';
import InformationPatients from '../pages/nurses/InformationPatients';
import PatientsRecord from '../pages/AdministrativeStaff/PatientsRecord';
import AppointmentScheduling from '../pages/AdministrativeStaff/AppointmentScheduling';
import PatientHistory from '../pages/AdministrativeStaff/PatientHistory';
import UserManagement from '../pages/HumanResources/UserManagement';

const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          items={[
            {
              key: 'sub1',
              icon: <UserOutlined />,
              label: 'Medicos',
              children: [
                {
                  key: '1',
                  label: (<Link to='/'>Gestion de Pacientes</Link>)
                },
                {
                  key: '2',
                  label: (<Link to='/doctor/clinicalHistory'>Historia Clinica</Link>)
                },
                {
                  key: '3',
                  label: (<Link to='/doctor/PrescribeOrders'>recetar y ordenes</Link>)
                },
                {
                  key: '4',
                  label: (<Link to='/doctor/ResultsDiacnosticAids'>resultados ayudas diacnosticas</Link>)
                }
              ]
            },
            {
              key: 'sub2',
              icon: <UserOutlined />,
              label: 'emfermeras',
              children: [
                {
                  key: '5',
                  label: (<Link to='/nurse/VitalSignsRecords'>registros de signos Vitales</Link>)
                },
                {
                  key: '6',
                  label: (<Link to='/nurse/MedicationAdministration'>Administracion de medicamentos</Link>)
                },
                {
                  key: '7',
                  label: (<Link to='/nurse/ProcessRecord'>Registros de procesos</Link>)
                },
                {
                  key: '8',
                  label: (<Link to='/nurse/VicitiesNuerces'>vicita de las emfermeras</Link>)
                },
                {
                  key: '9',
                  label: (<Link to='/nurse/InformationPatients'>informacion del paciente</Link>)
                },
              ]
            },
            {
              key: 'sub3',
              icon: <UserOutlined />,
              label: 'personal administrativo',
              children: [
                {
                  key: '10',
                  label: (<Link to='/AdministrativeStaff/PatientsRecord'>informacion del paciente</Link>)
                },
                {
                  key: '11',
                  label: (<Link to='/AdministrativeStaff/AppointmentScheduling'>Programacion de citas</Link>)
                },
                {
                  key: '12',
                  label: (<Link to='/AdministrativeStaff/PatientHistory'>historial del paciente</Link>)
                },
              ]
            },
            {
              key: 'sub4',
              icon: <UserOutlined />,
              label: 'recursos humanos',
              children: [
                {
                  key: '13',
                  label: (<Link to='/HumanRescurces/UserManagement'>gestion de usuario</Link>)
                },
              ]
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path='/' element={<ManagementPacientes />} />
            <Route path='/doctor/clinicalHistory' element={<ClinicalHistory />} />
            <Route path='/doctor/PrescribeOrders' element={<PrescribeOrders />} />
            <Route path='/doctor/ResultsDiacnosticAids' element={<ResultsDiacnosticAids />} />
            <Route path='/nurses/VitalSignsRecords' element={<VitalSignsRecords />} />
            <Route path='/nurses/MedicationAdministration' element={<MedicationAdministration />} />
            <Route path='/nurse/ProcessRecord' element={<ProcessRecord />} />   
            <Route path='/nurse/VicitiesNuerces' element={<VicitiesNuerces />} />
            <Route path='/nurse/InformationPatients' element={<InformationPatients />} />
            <Route path='/AdministrativeStaff/PatientsRecord' element={<PatientsRecord />} /> 
            <Route path='/AdministrativeStaff/AppointmentScheduling' element={<AppointmentScheduling />} />
            <Route path='/AdministrativeStaff/PatientHistory' element={<PatientHistory />} />
            <Route path='/HumanRescurces/UserManagement' element={<UserManagement />} />   
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;