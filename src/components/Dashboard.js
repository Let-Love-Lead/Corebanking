import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import { Menu, Avatar, Dropdown, Table, Button, Modal} from 'antd';
import { Pie } from '@ant-design/charts'; // Import Pie chart component
import { UserOutlined, DashboardOutlined, SettingOutlined, QuestionOutlined,
    LogoutOutlined, TransactionOutlined,CustomerServiceOutlined,AccountBookOutlined,BankOutlined,BookOutlined,ProjectOutlined,
    PartitionOutlined,ProductOutlined,BranchesOutlined} from '@ant-design/icons';
import { ArrowLeftRight, BookPlus, DollarSign, Users, ArrowUpRight, ArrowDownRight, CreditCard, BarChart4, HelpCircle, Send, PlusCircle, 
    FileText, Gauge, BookMinus, 
    CreditCardIcon,
    Landmark,
    StickyNote,
    Settings,
    SquareKanban,
    Workflow} from 'lucide-react';
import './style.css';

const { SubMenu } = Menu;

function Dashboard() {
    const [menuOpen, setMenuOpen] = useState(true);
    const [selectedMenuKey, setSelectedMenuKey] = useState('1');
    const [isModalVisible, setIsModalVisible]=useState(false);
    const [taskDetails, setTaskDetails]=useState(null);

    // Toggle the menu visibility
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    //Dashcard 
    const DashboardCard = ({ title, value, icon, trend, trendValue }) => {
        return (
            <div className="dashboard-card">
                <div className="dashboard-card-header">
                    <h3>{title}</h3>
                    {icon}
                </div>
                <p className="dashboard-card-value">{value}</p>
                <div className={`dashboard-card-trend ${trend === 'up' ? 'trend-up' : 'trend-down'}`}>
                    {trend === 'up' ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
                    <span>{trendValue}</span>
                </div>
            </div>
        );
    };

    // Recent Transactions Component
// const RecentTransactions = () => {
//     const transactions = [
//         { id: 1, description: 'Deposit', amount: '+$1,000', date: '2023-04-15' },
//         { id: 2, description: 'Withdrawal', amount: '-$500', date: '2023-04-14' },
//         { id: 3, description: 'Transfer', amount: '-$250', date: '2023-04-13' },
//         { id: 4, description: 'Bill Payment', amount: '-$100', date: '2023-04-12' },
//     ];

//     return (
//         <div className="recent-transactions">
//             <h3>Recent Transactions</h3>
//             <ul>
//                 {transactions.map((transaction) => (
//                     <li key={transaction.id} className="transaction-item">
//                         <div>
//                             <p>{transaction.description}</p>
//                             <p className="transaction-date">{transaction.date}</p>
//                         </div>
//                         <span className={`transaction-amount ${transaction.amount.startsWith('+') ? 'text-green' : 'text-red'}`}>
//                             {transaction.amount}
//                         </span>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// Quick Actions Component
const QuickActions = () => {
    const actions = [
        { icon: <Send size={24} />, label: 'Transfer' },
        { icon: <PlusCircle size={24} />, label: 'New Account' },
        { icon: <FileText size={24} />, label: 'Statements' },
        { icon: <HelpCircle size={24} />, label: 'Support' },
    ];

    return (
        <div className="quick-actions">
            <h3>Quick Actions</h3>
            <div className="actions-grid">
                {actions.map((action, index) => (
                    <button key={index} className="action-button">
                        {action.icon}
                        <span>{action.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

// Pie chart data
const pieData = [
    { type: 'Savings', value: 45 },
    { type: 'Checking', value: 30 },
    { type: 'Loans', value: 15 },
    { type: 'Investments', value: 10 },
];

// Pie chart configuration
const pieConfig = {
    appendPadding: 10,
    data: pieData,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    label: {
        //type:"inner",
        content: '{name} {percentage}', // Shows name and percentage
        style: {
            fontSize: 12,
        },
    },
    interactions: [{ type: 'element-active' }],
    legend: {
        position: 'bottom',
    },
};


    const handleMenuClick = (e) => {
        setSelectedMenuKey(e.key); // Update selected menu item state
    };

    // Mock data for the table
    const tasks = [
        {key: '1', task: 'Finish Project', officer:'Yaw', dueDate: '2024-10-10', status: 'Pending'},
        {key: '2', task: 'Submit Report', officer:'Maud', dueDate: '2024-10-15', status: 'Pending'},
        {key: '3', task: 'Take Report', officer:'Chris', dueDate: '2024-10-18', status: 'Pending'},
        {key: '4', task: 'Take Report', officer:'Chris', dueDate: '2024-10-18', status: 'Pending'},
    ];

    // Table columns
    const columns = [
        {title: 'Task', dataIndex: 'task', key: 'task'},
        {title: 'Officer', dataIndex: 'officer', key: 'officer'},
        {title: 'Due Date', dataIndex: 'dueDate', key: 'dueDate'},
        {title: 'Status', dataIndex: 'status', key: 'status'},
    ];

    //Handling row clicks to display modal
    const onRowClick = (record) =>{
        setTaskDetails(record);
        setIsModalVisible(true);
    };

    //closing modal
    const handleClose=()=>{
        setIsModalVisible(false);
    };

    // User profile dropdown
    const profileMenu = (
        <Menu style={{backgroundColor:'#0077B6'}}>
            <Menu.Item key="1" style={{color:"white"}}>Emmanuel Lawson</Menu.Item>
            <Menu.Item key="2" style={{color:"white"}}>badisamatter@gmail.com</Menu.Item>
            <Button icon={<LogoutOutlined/>} style={{color:"#0077B6", marginLeft:100}}><Link to="/">Logout</Link></Button>
        </Menu>
    );

    return (
        <div className="dashboard-container">
            {/* Side menu */}
            <div className="ribbon-menu">
                <Menu mode="horizontal" defaultSelectedKeys={[selectedMenuKey]} onClick={handleMenuClick} style={{ backgroundColor: '#0077B6', color: 'white'}}>
                    <Menu.Item style={{color:"white", fontSize:'18px'}}key="1" icon={<Gauge size={24}/>}><Link to="/dashboard">Dashboard</Link></Menu.Item>
                    <SubMenu key="sub3" title="Transactions" style={{fontSize:'18px'}} icon={<ArrowLeftRight/>}>
                        <Menu.Item key="2" style={{fontSize:'18px'}} icon={<BookPlus/>}>Deposit</Menu.Item>
                        <Menu.Item key="13" style={{fontSize:'18px'}} icon={<BookMinus />}>Withdrawal</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub1" title="Customer" style={{fontSize:'18px'}} icon={<Users />}>
                        <Menu.Item key="3" style={{fontSize:'18px'}} icon={<CreditCardIcon/>}><Link to="/accounts">Accounts</Link></Menu.Item>
                        <Menu.Item key="4" style={{fontSize:'18px'}} icon={<Landmark/>}>Banks</Menu.Item>
                    </SubMenu>
                    <Menu.Item style={{color:"white", fontSize:'18px'}} key="5" icon={<StickyNote/>}>Reports</Menu.Item>
                    <SubMenu key="sub2" title="Settings" style={{fontSize:'18px'}} icon={<Settings />}>
                        <Menu.Item key="6" style={{fontSize:'18px'}} icon={<Users/>}>Users</Menu.Item>
                        <Menu.Item key="7" style={{fontSize:'18px'}} icon={<SquareKanban/>}>Roles</Menu.Item>
                        <Menu.Item key="8" style={{fontSize:'18px'}} icon={<Workflow/>}>Workflow</Menu.Item>
                        <Menu.Item key="9" style={{fontSize:'18px'}} icon={<ProductOutlined />}>Products</Menu.Item>
                        <Menu.Item key="10" style={{fontSize:'18px'}} icon={<BranchesOutlined style={{size:'100px'}}/>}>Branches</Menu.Item>
                    </SubMenu>
                    <Menu.Item style={{color:"white"}} key="11" icon={<QuestionOutlined />}>Help</Menu.Item>
                    {/* <Menu.Item key="12" icon={<LogoutOutlined />}><Link to="/">Logout</Link></Menu.Item> */}
                </Menu>

                {/* Profile icon aligned to the right of the ribbon */}
                <Dropdown overlay={profileMenu} trigger={['click']}>
                    <Avatar icon={<UserOutlined />} style={{ cursor: 'pointer', float: 'right', marginTop: 10 }} />
                </Dropdown>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Dashboard Section */}
                <div className="dashboard-section">
                    <div className="dashboard-cards-grid">
                        <DashboardCard
                            title="Total Balance"
                            value="$1,234,567"
                            icon={<DollarSign size={24} className="text-green" />}
                            trend="up"
                            trendValue="3.5%"
                        />
                        <DashboardCard
                            title="Active Customers"
                            value="5,678"
                            icon={<Users size={24} className="text-blue" />}
                            trend="up"
                            trendValue="2.1%"
                        />
                        <DashboardCard
                            title="New Accounts"
                            value="123"
                            icon={<CreditCard size={24} className="text-purple" />}
                            trend="down"
                            trendValue="0.8%"
                        />
                        <DashboardCard
                            title="Transaction Volume"
                            value="$9,876,543"
                            icon={<BarChart4 size={24} className="text-yellow" />}
                            trend="up"
                            trendValue="5.2%"
                        />
                    </div>
                    <br/>
                    <div className="dashboard-grid">
                        <div className='table-container'>
                            <h3>Pending Approvals</h3>
                            <div className='table'>
                                <Table dataSource={tasks} columns={columns} pagination={false} 
                                onRow={(record)=>{
                                return{
                                    onClick:()=>onRowClick(record),
                                };}}/>
                            </div>
                        </div>
                        <div className='pie-chart-container'>
                            <h3>Account Distribution</h3>
                            <Pie {...pieConfig}/>
                        </div>
                    </div>
                    <br/>
                    <QuickActions />
                </div>
            </div>
            {/* Modal for task details */}
            <Modal title="Task Details" visible={isModalVisible} onCancel={handleClose} footer={null}>
                {taskDetails && (
                    <div>
                        <p><strong>Task:</strong> {taskDetails.task}</p>
                        <p><strong>Due Date:</strong> {taskDetails.dueDate}</p>
                        <p><strong>Status:</strong> {taskDetails.status}</p>
                        <div>
                            <Button style={{backgroundColor:'#0077B6', color:'white',}}>Cancel</Button>
                            <Button style={{backgroundColor:'#0077B6', color:'white'}}>Submit</Button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default Dashboard;
