"use client"
import React, {useState, useEffect} from 'react'
import _ from 'lodash';
import Nav from "@/app/layout/Nav";
import Image from 'next/image'

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
        <div
            className={`custom-nav box-border py-0 px-4 fixed z-50 w-full top-0 left-0 bg-opacity-60 bg-white shadow-md ${isUp ? 'opacity-0 translate-y-[-30px]' : 'opacity-100 translate-y-0'}`}>
            <div className="flex justify-between items-center">
                <div className='flex items-center'>
                    <Image alt='logo' className='mr-2' width={38} height={38} src='/image-proxy/blog/common/logo.png'/>
                    <span>{'AlanGrady\'s blogs'}</span>
                </div>
                <Nav/>
            </div>
        </div>
    )
}

export default Header