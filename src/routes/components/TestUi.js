import React, { useState } from 'react'
import 'antd/dist/antd.css';
import './assets/TestUi.scss'
import Logo1 from '../../assets/img/logo.png';
import { Button } from 'antd';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DashboardOutlined,
    ShoppingCartOutlined,
    FileTextOutlined,
    ShoppingOutlined,
    ChromeOutlined,
    SettingOutlined,
    LogoutOutlined,
    PlusCircleOutlined,
    BellOutlined
} from '@ant-design/icons';

import avaLogo from './assets/img/hinh1.png'

import ListUI from './ListUi'
import ChartUi from './ChartUi';
import BestSelling from './BestSelling';

const { Header, Sider, Content } = Layout;

export default function TestUi() {
    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => {
        setCollapsed(!collapsed)
    }
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{
                    backgroundColor: 'rgba(51, 48, 240, 1)',
                    color: 'white'
                }}>
                <div className="logo" >
                    <img src={Logo1} />
                </div>
                <Menu mode="inline" defaultSelectedKeys={['1']} style={{
                    backgroundColor: 'rgba(51, 48, 240, 1)',
                    color: 'white'
                }}>
                    <Menu.Item key="1" icon={<DashboardOutlined />}>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
                        Orders
                    </Menu.Item>
                    <Menu.Item key="3" icon={<FileTextOutlined />}>
                        Import List
                    </Menu.Item>
                    <Menu.Item key="4" icon={<ShoppingOutlined />}>
                        Products Ecommerce
                    </Menu.Item>
                    <Menu.Item key="5" icon={<ChromeOutlined />}>
                        Sites
                    </Menu.Item>
                    <Menu.Item key="6" icon={<SettingOutlined />}>
                        Setting
                    </Menu.Item>
                    <Menu.Item key="7" icon={<LogoutOutlined />}>
                        Log out
                    </Menu.Item>
                    <Menu.Item>
                        Version 0.1.1
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout" style={{
                    backgroundColor: 'white',
                }}>
                <Header className="site-layout-background site__header" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                    <div className='site__header-detail'>
                        <Button className="site__header-1"><ChromeOutlined /> Tool drop coming soon</Button>
                        <Button className="site__header-1"><PlusCircleOutlined /> Link to <b>AliEpress</b></Button>
                        <Button className="site__header-notify"><BellOutlined />
                            <p className="site__header-notify-no">1</p>
                        </Button>
                        <div className="site__header-user">
                            <img className="site__header-user-img" src={avaLogo} />
                            <span>User01_10xDrop</span>
                        </div>
                    </div>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <div className="site__content">
                        <div className="site__content-listChart">
                            <ListUI />
                            <ChartUi />
                        </div>
                        <div className="site__content-selling">
                            <BestSelling />
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}
