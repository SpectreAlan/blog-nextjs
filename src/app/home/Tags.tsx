import React from "react";
import {TagOutlined} from "@ant-design/icons";
import Link from 'next/link';

const RecentUpdate: React.FC<{ tags: string[] }> = ({tags}) => {
    return <div className="p-4 rounded-lg mb-4 overflow-hidden text-center fuck-shadow">
        <div className='text-left mb-2 font-bold'><TagOutlined className='mr-2' rev=''/>标签</div>
        <div className='flex flex-wrap justify-around'>
            {
                tags.map((tag, index) => (
                    <Link
                        key={tag}
                        href={`/?tags=${tag}`}
                        as={`/?tags=${tag}`}
                    >
                    <span
                        className='p-1'
                        style={{
                            color: `rgb(${Math.floor(Math.random() * 201)}, ${Math.floor(Math.random() * 201)}, ${Math.floor(Math.random() * 201)} )`,
                            fontSize: Math.floor(Math.random() * 15 + 15) + 'px'
                        }}
                    >{tag}
                </span>
                    </Link>
                ))
            }
        </div>

    </div>
}

export default RecentUpdate