import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Menu, Button, Form, Input } from 'antd'; // Import Ant Design Input
import { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined, DashboardOutlined, SettingOutlined, QuestionOutlined,
    LogoutOutlined, TransactionOutlined,CustomerServiceOutlined,AccountBookOutlined,BankOutlined,BookOutlined,ProjectOutlined,
    PartitionOutlined,ProductOutlined,BranchesOutlined } from '@ant-design/icons';
import './style.css';

const { SubMenu } = Menu;

function OpenAccount(){
    const [menuOpen, setMenuOpen] = useState(true);
    const [selectedMenuKey, setSelectedMenuKey] = useState('1');

    // Toggle the menu visibility
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuClick = (e) => {
        setSelectedMenuKey(e.key); // Update selected menu item state
    };

    return(
        <div className="dashboard-container">
        {/* Side menu */}
        <div className={`menu ${menuOpen ? 'open' : 'closed'}`}>
            <Button className="menu-toggle" onClick={toggleMenu} style={{backgroundColor:"#0077B6"}}>
                {menuOpen ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            </Button>
            <Menu mode="inline" defaultSelectedKeys={[selectedMenuKey]} onClick={handleMenuClick} style={{ backgroundColor: '#0077B6', color:'white', height: '100%' }}>
                    <Menu.Item key="1" icon={<DashboardOutlined />}><Link to="/dashboard">Dashboard</Link></Menu.Item>
                    <SubMenu key="sub3" title="Transactions" icon={<TransactionOutlined />}>
                        <Menu.Item key="2" icon={<AccountBookOutlined/>}>Deposit</Menu.Item>
                        <Menu.Item key="13" icon={<BankOutlined/>}>Withdrawal</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub1" title="Customer" icon={<CustomerServiceOutlined/>}>
                        <Menu.Item key="3" icon={<AccountBookOutlined/>}><Link to="/accounts">Accounts</Link></Menu.Item>
                        <Menu.Item key="4" icon={<BankOutlined/>}>Banks</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="5" icon={<BookOutlined/>}>Reports</Menu.Item>
                    <SubMenu key="sub2" title="Settings" icon={<SettingOutlined/>}>
                        <Menu.Item key="6" icon={<UserOutlined/>}>Users</Menu.Item>
                        <Menu.Item key="7" icon={<ProjectOutlined/>}>Roles</Menu.Item>
                        <Menu.Item key="8" icon={<PartitionOutlined/>}>Workflow</Menu.Item>
                        <Menu.Item key="9" icon={<ProductOutlined/>}>Products</Menu.Item>
                        <Menu.Item key="10" icon={<BranchesOutlined/>}>Branches</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="11" icon={<QuestionOutlined/>}>Help</Menu.Item>
                    <Menu.Item key="12" icon={<LogoutOutlined/>}><Link to="/">Logout</Link></Menu.Item>
                </Menu>
        </div>

        {/* Main Content */}
        <div className="main-content">
            {/* Header */}
            <header style={{backgroundColor:"#0077B6", boxShadow:10, padding:10, borderRadius:5, alignItems:"center", justifyContent:'space-between', display:'flex'}}>
                <h2 style={{flex: 1, color:"white"}}>Transactions</h2>
            </header>
            <br/> 
            <h3>Cash Deposit</h3>
            <div className="accountInput">
                {/* Form Section */}
                <Form style={{ width: '100%' }}>
                    <Form.Item label="Account Number">
                        <Input placeholder='Enter Account number' required/>
                    </Form.Item>
                    <Form.Item label="Amount">
                        <Input placeholder='GHc...' required/>
                    </Form.Item>
                    <Form.Item label="Comment">
                        <Input placeholder='comment' required/>
                    </Form.Item>
                    <Form.Item label="Verification Code">
                        <Input placeholder='verification code' required/>
                    </Form.Item>
                    <Form.Item label="National ID">
                        <Input placeholder='GHA-0000000-0' required/>
                    </Form.Item>
                    <Form.Item label="Source of Funds">
                        <Input placeholder='source of funds'/>
                    </Form.Item>
                    <Form.Item label="Purpose of Transaction">
                        <Input placeholder='purpose of transaction'/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit"
                            style={{backgroundColor: '#0077B6',borderColor: '#0077B6'}}>
                            Deposit
                        </Button>
                    </Form.Item>
                </Form>
                {/* Account Details Box */}
                <div className="account-details">
                    <h4>Account Information</h4>
                    <p><strong>Name on Account:</strong> John Doe</p>
                    <p><strong>Balance Before Deposit:</strong> GHc 5,000</p>
                    <p><strong>Balance After Deposit:</strong> GHc 6,000</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default OpenAccount;
