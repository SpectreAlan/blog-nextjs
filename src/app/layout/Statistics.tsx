'use client'
import React, { useEffect} from 'react'
import httpRequest from "@/utils/fetch";
import platform from 'platform'

const fetchIp = async (): Promise<Common.IIP> => {
    const res = await fetch('/ip/json?lang=zh-CN')
    return await res.json()
}

const Statistics = () => {
    useEffect(() => {
        fetchIp().then(({status, ...res}) => {
            if (status === 'success') {
                const {country, city, org: organization, regionName: province, query: ip} = res
                const {product, os, name} = platform
                let osName = ''
                if (os) {
                    const {family = '', version} = os
                    osName = family + ' ' + version
                }
                httpRequest({
                    url: '/blog/statistics',
                    method: 'POST',
                    data: {
                        country, city, organization, province, ip, device: product, os: osName, browser: name
                    }
                })
            }
        })
    }, [])
    return null
}

export default Statistics
