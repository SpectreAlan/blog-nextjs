"use client"
import React, {useEffect, useState} from 'react'
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
import {useRouter, usePathname} from 'next/navigation'
import {Menu, Drawer, Row, Col} from 'antd'
import type {MenuProps} from 'antd';
import Search from "@/app/layout/Search";

const Nav: React.FC = () => {
    const router = useRouter()
    const pathname = usePathname()

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
        router.push(key)
    };
    const items: MenuProps['items'] = [
        {
            label: '搜索',
            key: 'search',
            icon: <SearchOutlined rev=''/>,
        },
        {
            label: '主页',
            key: '/',
            icon: <HomeOutlined rev=''/>,
        },
        {
            label: '时间轴',
            key: '/timeLine',
            icon: <CalendarOutlined rev=''/>,
        },
        {
            label: (
                <a href="https://note.jszoo.com" target="_blank" rel="noopener noreferrer">
                    文档
                </a>
            ),
            key: 'note',
            icon: <FileTextOutlined rev=''/>
        },
        {
            label: '工具',
            key: '/tool',
            icon: <ToolOutlined rev=''/>,
            children: [
                {
                    label: '图片无损压缩',
                    key: 'imageZip',
                    icon: <FileZipOutlined rev=''/>,
                },
            ]
        },
        {
            label: '关于',
            key: '/about',
            icon: <TagOutlined rev=''/>,
        },
    ]

    useEffect(() => {
        setCurrent(pathname)
    }, [pathname])

    const renderMenu = (mode: any) => <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode={mode}
        items={items}
        style={{
            background: 'transparent',
            border: 'none'
        }}
    />
    return <div>
        <div className='hidden lg:block max-h-14 overflow-hidden'>{renderMenu('horizontal')}</div>
        <div className='block lg:hidden max-h-14 overflow-hidden'><MenuFoldOutlined rev='' onClick={() => setNavDrawer(true)}/>
        </div>
        {
            navDrawer && <Drawer
                open={navDrawer}
                title=''
                footer={null}
                width={300}
                onClose={() => setNavDrawer(false)}
            >
                {renderMenu('vertical')}
            </Drawer>
        }
        {searchModal && <Search setSearchModal={setSearchModal}/>}
    </div>
}

export default Nav