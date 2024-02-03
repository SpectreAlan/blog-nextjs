import React from "react";
import {ReadOutlined} from '@ant-design/icons'

const Introduction = () => {
    return <>
        <div className='font-bold text-md'><ReadOutlined rev=''/> 工具说明：</div>
        <p>
            该工具是一款小巧的在线批量无损压缩图片工具，图片不会上传，纯浏览器压缩，压缩方式并非单纯的裁剪尺寸，通过压缩比控制图片的输出质量，压缩比值越小压缩力度越大，对应图片质量越低，建议使用默认值压缩，单次可以压缩50张
        </p>
    </>
}

export default Introduction