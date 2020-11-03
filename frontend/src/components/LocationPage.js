import { Layout, Menu } from 'antd';
import React from "react";
import {
  TeamOutlined,
  BugOutlined,
  DotChartOutlined,
  SecurityScanOutlined,
  FullscreenExitOutlined,
} from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import { Table, Space } from 'antd';
import { Input } from 'antd';
import axios from "axios";

const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'X-coordinate',
    dataIndex: 'coordinateX',
    key: 'coordinateX',
  },
  {
    title: 'Y-coordinate',
    dataIndex: 'coordinateY',
    key: 'coordinateY',
  },
  {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a href="#">Edit</a>
        <a href="#">Delete</a>
      </Space>
    ),
  },
];

  const { Search } = Input;
  // const databaseURL = "postgres://pubnpubtfrtumg:422577b28efc2606051d7a6eaefbad47110bbe895bf56058d8a9d7ba1c57cf49@ec2-54-156-53-71.compute-1.amazonaws.com:5432/d5gbk39fjhmcbc";
  const databaseURL = "http://localhost:8000"

  
class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    data: [],
  };

  componentDidMount() {
    this.refreshTable();
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  getData = value => {
    fetch(`https://geodata.gov.hk/gs/api/v1.0.0/locationSearch?q=${value}`)
      .then((response) => response.json())
      .then(response => this.postData(response[0]))
  };

  postData = data => {
    console.log(data)
    var raw = JSON.stringify({
      name: data.nameEN,
      coordinateX: data.x,
      coordinateY: data.y,
      address: data.addressEN,
    });
    fetch(`${databaseURL}/api/locations/`, {
      method: 'POST', // or 'PUT
      headers: {
        'Content-Type': 'application/json',
      },
      body: raw,
    })
    .then(response => console.log(response))
    .then(this.refreshTable)
  }

  refreshTable = () => {
    axios
    .get(`${databaseURL}/api/locations/`)
    .then(response => this.setState({ data: response.data }))
  }

  render() {
    const { collapsed, data } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo">
              <Title style={{ color: 'white'}} level={2} ellipsis={true}>HotZone 🔥</Title>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<FullscreenExitOutlined />}>
              Locations
            </Menu.Item>
            <Menu.Item key="2" icon={<SecurityScanOutlined />}>
              Cases
            </Menu.Item>
            <Menu.Item key="3" icon={<DotChartOutlined />}>
              Clusters
            </Menu.Item>
            <Menu.Item key="4" icon={<BugOutlined />}>
              Virus
            </Menu.Item>
            <Menu.Item key="5" icon={<TeamOutlined />}>
              Patients
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Search style={{ margin: '0 0 16px 0'}}
              placeholder="Location Name"
              allowClear
              enterButton="Add Location"
              size="large"
              onSearch={this.getData}
            />
            <Table columns={columns} dataSource={data}/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED<br/>
          HotZone 🔥 by Benedictus Alvian Sofjan</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
