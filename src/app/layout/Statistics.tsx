'use client'
import React, {useEffect} from 'react'
import httpRequest from "@/utils/fetch";
import platform from 'platform'
import '@/assets/js/ribbon'

const fetchIp = async (ip:string): Promise<Common.IIP> => {
    const res = await fetch(`/ip/json/${ip}?lang=zh-CN`)
    return await res.json()
}

const Statistics:React.FC<{ip:string}> = ({ip}) => {
    useEffect(() => {
        const last = sessionStorage.getItem('last')
        if (!last || ((new Date().getTime() - Number(last)) > 300000)) {
            fetchIp(ip).then(({status, ...res}) => {
                if (status === 'success') {
                    const {country, city, org: organization, regionName: province, query: ip} = res
                    const {product, os, name} = platform
                    let osName = ''
                    if (os) {
                        osName = (os?.family ?? '') + ' ' + (os?.version ?? '')
                    }
                    const data = {country, city, organization, province, ip, device: product, os: osName, browser: name}
                    sessionStorage.setItem('device', JSON.stringify(data))
                    sessionStorage.setItem('last', new Date().getTime() + '')
                    httpRequest({
                        url: '/blog/statistics',
                        method: 'POST',
                        data
                    })
                }
            })
        }
    }, [ip])
    return null
}

export default Statistics
