import React from "react";
import {TagOutlined} from "@ant-design/icons";

const RecentUpdate: React.FC<{ tags: string[] }> = ({tags}) => {
    return <div className="p-4 rounded-lg mb-4 overflow-hidden text-center fuck-shadow">
        <div className='text-left mb-2 font-bold'><TagOutlined className='mr-2' rev=''/>标签</div>
        <div className='flex flex-wrap justify-around'>
            {
                tags.map((item, index) => (
                    <span
                        className='p-1'
                        key={index}
                        style={{
                            color: `rgb(${Math.floor(Math.random() * 201)}, ${Math.floor(Math.random() * 201)}, ${Math.floor(Math.random() * 201)} )`,
                            fontSize: Math.floor(Math.random() * 15 + 15) + 'px'
                        }}
                    >{item}
                </span>
                ))
            }
        </div>

    </div>
}

export default RecentUpdate