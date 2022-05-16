import React, {useEffect, useState} from 'react';
import './dashboardHome.css';
import {Row, Col, Layout, Menu, Breadcrumb, Image, Table} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import useWindowSize from "../../utils/custom-hooks/window-dimensions.hook";
import {Header} from "antd/es/layout/layout";
import {useHistory} from "react-router-dom";
const { SubMenu } = Menu;


const {Content, Footer, Sider} = Layout;

function CounsellorHome() {
  const router = useHistory();
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    },
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    },
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    },
  ];
  const columns = [
    {
      title: 'Student Name',
      width: 150,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    { title: 'Day', dataIndex: 'address', key: '1' },
    { title: 'Time', dataIndex: 'address', key: '2' },
    { title: 'Status', dataIndex: 'address', key: '3' },

    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 200,
      render: () => <a onClick={() => {
        router.push("/start-meeting")
      }}>Start Meeting</a>,

},
];
  const [windowState, setWindowState] = useState(false);
  const {width} = useWindowSize();
  useEffect(() => {
    if (width > 996) {
      setWindowState(false);
    } else {
      setWindowState(true);
    }
  }, [width]);
  return (
      <Layout style={{ minHeight: '110vh' }}>
        <Sider collapsible collapsed={windowState} onCollapse={() => {
          setWindowState(!windowState);
        }}>
          <Menu style={{backgroundColor:"#C0843D",color:"white"}} defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Appointments
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Transactions
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content >
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
             <Row>
               <Col span={8} >
                 <div className="counsellor-name2">
                   <h1>Saad Ali Ahsan</h1>
                   <h2>Counsellor</h2>
                 </div>

               </Col>
               <Col span={6} offset={9}>
                 <Image
                     preview={false}
                     className="image-style"
                     src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                 />
               </Col>

             </Row>
              <Row>
                <Col span={24}>
                    <h1 className="appointment">Appointments</h1>
                    <Table style={{marginTop:"7%"}} pagination={{ pageSize: 4}}  columns={columns} dataSource={data} scroll={{ x: 1200 }} />

                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
  );
}

export default CounsellorHome;
