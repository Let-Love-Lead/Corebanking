import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Menu, Button, Form, Input, Select } from 'antd'; // Import Ant Design Input
import { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined, DashboardOutlined, SettingOutlined, QuestionOutlined,
    LogoutOutlined, TransactionOutlined, CustomerServiceOutlined, AccountBookOutlined, BankOutlined, BookOutlined, 
    ProjectOutlined, PartitionOutlined, ProductOutlined, BranchesOutlined } from '@ant-design/icons';
import './setStyle.css';

const { SubMenu } = Menu;

function Accounts(){
    const [menuOpen, setMenuOpen] = useState(true);
    const [selectedMenuKey, setSelectedMenuKey] = useState('1');
    const [form] = Form.useForm();

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
        <div className="ribbon-menu">
            <Menu mode="horizontal" onClick={handleMenuClick} style={{ backgroundColor: '#0077B6', color: 'white' }}>
                    <Menu.Item style={{color:"white"}}key="1" icon={<DashboardOutlined />}><Link to="/dashboard">Dashboard</Link></Menu.Item>
                    <SubMenu key="sub3" title="Transactions" icon={<TransactionOutlined />}>
                        <Menu.Item key="2" icon={<AccountBookOutlined />}>Deposit</Menu.Item>
                        <Menu.Item key="13" icon={<BankOutlined />}>Withdrawal</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub1" title="Customer" icon={<CustomerServiceOutlined />}>
                        <Menu.Item key="3" icon={<AccountBookOutlined />}><Link to="/accounts">Accounts</Link></Menu.Item>
                        <Menu.Item key="4" icon={<BankOutlined />}>Banks</Menu.Item>
                    </SubMenu>
                    <Menu.Item style={{color:"white"}} key="5" icon={<BookOutlined />}>Reports</Menu.Item>
                    <SubMenu key="sub2" title="Settings" icon={<SettingOutlined />}>
                        <Menu.Item key="6" icon={<UserOutlined />}>Users</Menu.Item>
                        <Menu.Item key="7" icon={<ProjectOutlined />}>Roles</Menu.Item>
                        <Menu.Item key="8" icon={<PartitionOutlined />}>Workflow</Menu.Item>
                        <Menu.Item key="9" icon={<ProductOutlined />}>Products</Menu.Item>
                        <Menu.Item key="10" icon={<BranchesOutlined />}>Branches</Menu.Item>
                    </SubMenu>
                    <Menu.Item style={{color:"white"}} key="11" icon={<QuestionOutlined />}>Help</Menu.Item>
                    {/* <Menu.Item key="12" icon={<LogoutOutlined />}><Link to="/">Logout</Link></Menu.Item> */}
                </Menu>
        </div>

        {/* Main Content */}
        <div className="main-content">
            {/* Header */}
            <header style={{backgroundColor:"#0077B6", boxShadow:10, padding:10, borderRadius:5, alignItems:"center", justifyContent:'space-between', display:'flex'}}>
                <h2 style={{flex: 1, color:"white"}}>Account Opening</h2>
            </header>
            <br/> 
            <h3>Account Opening</h3>
            <div className="accountInput">
                {/* Form Section */}
                <Form style={{ width: '100%' }}>
                    <Form.Item label="First Name">
                        <Input placeholder='First Name' required/>
                    </Form.Item>
                    <Form.Item label="ID Type">
                        <Select placeholder="Select ID type" required>
                            <Select.Option value="ghanacrad">Ghana Card</Select.Option>
                            <Select.Option value="votersid">Voter ID</Select.Option>
                            <Select.Option value="passport">Passport</Select.Option>
                            <Select.Option value="driving">Driving License</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Contact Type">
                        <Select placeholder="Select contact type" required>
                            <Select.Option value="email">Email</Select.Option>
                            <Select.Option value="phone">Phone</Select.Option>
                            <Select.Option value="fax">Fax</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Address Type">
                    <Select placeholder="Select address type" required>
                            <Select.Option value="home">Home</Select.Option>
                            <Select.Option value="business">Business</Select.Option>
                    </Select>
                    </Form.Item>
                    <Form.Item label="Address Line 2">
                        <Input placeholder='Address Line 2' required/>
                    </Form.Item>
                    <Form.Item label="City">
                        <Input placeholder='City' required/>
                    </Form.Item>
                    <Form.Item label="Postal Code">
                        <Input placeholder='Postal Code'/>
                    </Form.Item>
                </Form>
                <Form style={{ width: '100%' }}>
                    <Form.Item label="Last Name">
                        <Input placeholder='Last Name' required/>
                    </Form.Item>
                    <Form.Item label="ID Number">
                        <Input placeholder='ID Number' required/>
                    </Form.Item>
                    <Form.Item label="Contact Value">
                        <Input placeholder='Contact Value' required/>
                    </Form.Item>
                    <Form.Item label="Address Line 1">
                        <Input placeholder='Address Line 1'/>
                    </Form.Item>
                    <Form.Item label="State">
                        <Input placeholder='State'/>
                    </Form.Item>
                    <Form.Item label="Country">
                        <Input placeholder='Country'/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" 
                        disabled={form.getFieldValue('contactType') === 'select'}
                            style={{backgroundColor: '#0077B6',borderColor: '#0077B6'}}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    </div>
    );
}

export default Accounts;
