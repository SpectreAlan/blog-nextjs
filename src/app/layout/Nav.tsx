import React, {useState} from 'react'
import {
    HomeOutlined,
    SearchOutlined,
    CalendarOutlined,
    TagOutlined,
    FileTextOutlined,
    ToolOutlined,
    FileZipOutlined,
    MenuFoldOutlined
} from '@ant-design/icons'
import {useRouter} from 'next/navigation'
import {Menu, Drawer} from 'antd'
import type {MenuProps} from 'antd';
import Search from "@/app/layout/Search";

const Nav: React.FC = () => {
    const router = useRouter()
    const [current, setCurrent] = useState('home');
    const [searchModal, setSearchModal] = useState(false);
    const [navDrawer, setNavDrawer] = useState(false);

    const onClick: MenuProps['onClick'] = ({key}) => {
        setNavDrawer(false)
        if (key === 'note') {
            return
        }
        if (key === 'search') {
            setSearchModal(true)
            return
        }
        setCurrent(key);
        router.push(`/${key === 'home' ? '' : key}`)
    };
    const items: MenuProps['items'] = [
        {
            label: '搜索',
            key: 'search',
            icon: <SearchOutlined/>,
        },
        {
            label: '主页',
            key: 'home',
            icon: <HomeOutlined/>,
        },
        {
            label: '时间轴',
            key: 'timeLine',
            icon: <CalendarOutlined/>,
        },
        {
            label: (
                <a href="https://note.jszoo.com" target="_blank" rel="noopener noreferrer">
                    文档
                </a>
            ),
            key: 'note',
            icon: <FileTextOutlined/>
        },
        {
            label: '工具',
            key: 'tool',
            icon: <ToolOutlined/>,
            children: [
                {
                    label: '图片无损压缩',
                    key: 'imageZip',
                    icon: <FileZipOutlined/>,
                },
            ]
        },
        {
            label: '关于',
            key: 'about',
            icon: <TagOutlined/>,
        },
    ]

    const renderMenu = () => <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{
            background: 'transparent',
            border: 'none'
        }}
    />
    return <>
        {
            window.innerWidth > 768 ?
                renderMenu() :
                <MenuFoldOutlined onClick={() => setNavDrawer(true)}/>
        }
        {
            navDrawer && <Drawer
                open={navDrawer}
                title=''
                footer={null}
                width={300}
                onClose={() => setNavDrawer(false)}
            >
                {renderMenu()}
            </Drawer>
        }
        {searchModal && <Search setSearchModal={setSearchModal}/>}
    </>
}

export default Nav