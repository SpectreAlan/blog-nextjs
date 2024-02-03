import React from "react";
import '@/assets/style/loading.scss'
import Image from 'next/image'

const Loading: React.FC = () => {
    return <div className="w-full h-screen text-center fixed top-0 left-0 global-loading">
        <div className="loading"/>
        <Image
            src='/loading.gif'
            alt="loading"
            width={100}
            height={100}
        />
    </div>
}

export default Loading