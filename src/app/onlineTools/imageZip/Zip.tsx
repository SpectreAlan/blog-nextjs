'use client'
import React, {useState} from "react";
import {QuestionCircleOutlined, UploadOutlined, SyncOutlined, FileZipOutlined, RobotOutlined} from '@ant-design/icons'
import {Steps, Row, Col, Slider, Upload, Button, message} from 'antd'
import JSZip from 'jszip'
import FileSaver from 'file-saver'
import {base64ToBlob, photoCompress} from './utils'
import type {UploadProps, UploadFile} from 'antd';

const Zip = () => {
    const [step, setStep] = useState(0)
    const [count, setCount] = useState(0)
    const [list, setList] = useState<UploadFile[]>([])
    const [quality, setQuality] = useState(7)
    const [state, setState] = useState(false)

    const marks = {
        1: {style: {color: '#f50',}, label: <strong>1</strong>},
        10: {style: {color: '#f50',}, label: <strong>10</strong>}
    }
    const uploadConfig: UploadProps = {
        fileList: list,
        maxCount: 50,
        multiple: true,
        listType: 'picture',
        beforeUpload: (file: UploadFile) => {
            if (!file.type || !file.type.includes('image')) {
                message.error('年轻人不讲武德 ' + file.name + ' 不是一张图片呀铁汁')
                return
            }
            setList((list) => {
                const files = [...list, file]
                if (files.length > 0) {
                    setStep(1)
                }
                return files
            })
        },
        onRemove: (file: any) => {
            const files = list.filter((v) => v.name !== file.name)
            setList(files)
        },
    };
    const getImgArrayBuffer = (img: Blob) => new Promise((resolve, reject) => {
        photoCompress(img, {quality: quality * 0.1, type: img.type}, (data: string) => {
            setCount((count) => ++count)
            resolve(base64ToBlob(data))
        })
    })
    const zipImg = () => {
        if (state) {
            message.info('别急呀大佬，上一波操作还没结束呢')
            return
        }
        setCount(0)
        setStep(2)
        if (list.length === 0) {
            message.error('你还没有选择图片呀大佬')
            return
        }
        setState(true)
        const zip = new JSZip();
        const promises: Promise<void>[] = []
        list.map((item: UploadFile) => {
            // @ts-ignore
            const promise = getImgArrayBuffer(item).then((data) => {
                // @ts-ignore
                zip.file(item.name, data, {binary: true})
            })
            promises.push(promise)
        })
        Promise.all(promises).then(() => {
            zip.generateAsync({type: 'blob'}).then((content: Blob) => {
                FileSaver.saveAs(content, `${window.location.host}.zip`);
                message.success('压缩完毕，保存压缩包即可')
                setState(false)
                setList([])
                setStep(0)
            });
        })
            .catch(() => {
                message.error('文件压缩失败,刷新重试')
            });
    }
    return <>
        <div className='font-bold text-md'><RobotOutlined rev=''/>使用步骤：</div>
        <Steps type="navigation" size="small" current={step} className="mb-8">
            <Steps.Step title="第一步" status="finish" subTitle="设置图片压缩比" description="建议默认"/>
            <Steps.Step title="第二步" status="process" subTitle="选择图片" description="可以多选、多次选择"/>
            <Steps.Step title="第三步" status="wait" subTitle="开始压缩" description="压缩完以后自动下载"/>
        </Steps>
        <Row className='rounded-md p-4 border-1 border-dashed border-lightslategrey items-center'>
            <Col lg={8} md={24} sm={24} xs={24}>
                <div>压缩比 <QuestionCircleOutlined rev=''/> (默认7)</div>
                <Slider
                    marks={marks}
                    min={1}
                    max={10}
                    defaultValue={quality}
                    onChange={(val) => setQuality(Number(val))}
                />
            </Col>
            <Col lg={8} md={24} sm={24} xs={24} className='text-center mb-4'>
                <Upload {...uploadConfig}>
                    <Button className='w-full'>
                        <UploadOutlined rev=''/>
                        选择图片 {list.length} / 50
                    </Button>
                </Upload>
            </Col>
            <Col lg={8} md={24} sm={24} xs={24} className='text-center'>
                <Button onClick={() => zipImg()}>
                    {state ? <><SyncOutlined spin rev=''/>{count} / {list.length}</> : <FileZipOutlined rev=''/>}
                    开始压缩
                </Button>
            </Col>
        </Row>
    </>
}

export default Zip