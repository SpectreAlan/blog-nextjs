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
            console.log(y > 200 && y > scrollY);
            setIsUp(y > 200 && y > scrollY)
            setScrollY(y)
        }, 300)
    })
    return (
        <div className={`box-border py-0 px-2 fixed z-50 w-full top-0 left-0 bg-opacity-60 bg-white shadow-md transition-all duration-800 ease-in-out ${isUp ? 'common-header-show' : 'common-header-hide'}`}>
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