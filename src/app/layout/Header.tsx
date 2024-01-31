"use client"
import React, {useState, useEffect} from 'react'
import { Avatar} from 'antd'
import _ from 'lodash';
import Nav from "@/app/layout/Nav";

const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isUp, setIsUp] = useState(false);

    useEffect(() => {
        window.onscroll = _.throttle(() => {
            const y = document.documentElement.scrollTop
            setIsUp(y > 200 && y > scrollY)
            setScrollY(y)
        }, 300)
    })
    return (
        <div className={`box-border py-0 px-2 fixed z-50 w-full top-0 left-0 bg-opacity-60 bg-white shadow-md transition-transform duration-800 ${isUp ? 'opacity-0 transform translate-y-[-30px]' : 'opacity-100 transform translate-x-0 translate-y-0 translate-z-0'}`}>
            <div className="flex justify-between align-middle">
                <div className="log">
                    <Avatar className='mr-2' size="large" src='/image-proxy/blog/common/logo.png'/>
                    <span>{'AlanGrady\'s blogs'}</span>
                </div>
                <div className="nav">
                    <Nav/>
                </div>
            </div>
        </div>
    )
}

export default Header