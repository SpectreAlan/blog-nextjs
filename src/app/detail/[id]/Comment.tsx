'use client'
import React, {useState, useEffect} from 'react'
import {Divider, Spin, Row, Col, Button, Tag, Avatar} from 'antd'
import httpRequest from "@/utils/fetch";
import {CommentOutlined, GlobalOutlined, EnvironmentOutlined} from '@ant-design/icons'
import RandomAvatar from '@/app/detail/[id]/Avatar'
import CommentForm from "@/app/detail/[id]/CommentForm";

const Comment: React.FC<{ id: string }> = ({id}) => {
    const defaultInfo: Comment.Info = {
        article: id,
        parentId: '-1'
    }
    const [loading, setLoading] = useState(false)
    const [info, setInfo] = useState<Comment.Info>(defaultInfo)
    const [comments, setComments] = useState<Comment.Item[]>([])
    const queryComments = async () => {
        setLoading(true)
        const res: { list: Comment.Item[] } | null = await httpRequest({
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/comment`,
            data: {id}
        })
        setLoading(false)
        const list = res?.list ?? []
        setComments(generateComments(list))
    }
    const generateComments = (list: Comment.Item[]): Comment.Item[] => {
        const hash: { [key: string]: Comment.Item[] } = {}
        let topLevel: Comment.Item[] = []
        const secondLevel: Comment.Item[] = []
        for (let i = 0; i < list.length; i++) {
            if (list[i].parentId === '-1') {
                topLevel.push(list[i])
                hash[list[i].id] = []
            } else {
                secondLevel.push(list[i])
            }
        }
        for (let i = 0; i < secondLevel.length; i++) {
            secondLevel[i].parentName = topLevel.find(item => item.id === secondLevel[i].parentId)!.nickName
            hash[secondLevel[i].parentId].push(secondLevel[i])
        }
        topLevel.sort((a, b) => (new Date(a.createdAt) as any) - (new Date(b.createdAt) as any))

        for (let i = 0; i < list.length; i++) {
            const temp: Comment.Item[] = hash[topLevel[i].id]
            if (temp && temp.length > 0) {
                const l = topLevel.slice(0, i + 1)
                const r = topLevel.slice(i + 1, topLevel.length)
                temp.sort((a, b) => (new Date(a.createdAt) as any) - (new Date(b.createdAt) as any))
                topLevel = l.concat(temp, r)
                i += temp.length
            }
        }
        const i = topLevel.findIndex(item => item.pinned)
        if (i > 0) {
            const o = {...topLevel[i]}
            topLevel.splice(i, 1);
            topLevel.unshift(o);
        }
        return topLevel
    }
    const handelFinished = () => {
        setInfo(defaultInfo)
        queryComments()
    }

    useEffect(() => {
        queryComments()
    }, [])

    return <>
        <Divider/>
        <div className='md:max-w-[1000px] mx-auto p-8 fuck-shadow rounded'>
            <div className='text-xl font-bold mb-4'><CommentOutlined rev=''/> 吐槽一下</div>
            {
                info.parentId === '-1' && <CommentForm info={info} handelFinished={handelFinished}/>
            }
            <Spin spinning={loading}>
                {
                    comments.map((comment, i) => (
                        <div key={i}
                             className={`rounded-xl fuck-shadow py-4 mb-4`}>
                            <Row className='px-2'>
                                <Col xs={0} sm={0} md={0} lg={2} xl={2}>
                                    {
                                        comment.author ?
                                            <Avatar src='/image-proxy/blog/common/logo.png' className='h-20 w-20'
                                                    shape="circle"/> : <RandomAvatar/>
                                    }
                                </Col>
                                <Col xs={20} sm={20} md={20} lg={21} xl={20}>
                                    {comment.pinned ? <Tag color="magenta">置顶</Tag> : (
                                        <div>
                                            {
                                                comment.nickName ?
                                                    <b className='text-teal-950 text-xl'>{comment.nickName}</b> :
                                                    <Tag color="cyan">博主</Tag>
                                            }
                                            {
                                                comment.parentName &&
                                                <b className='text-teal-950 text-xl'> @ {comment.parentName}</b>
                                            }
                                            {
                                                comment?.platform && <i className='mx-2'> <GlobalOutlined rev=''/>{comment.platform} </i>
                                            }
                                            <i> <EnvironmentOutlined rev='' />{comment.region} </i>
                                        </div>
                                    )}
                                    <div className='py-2 text-sm text-gray-400'>{comment.createdAt}</div>
                                    <span>{comment.content}</span>
                                </Col>
                                <Col xs={4} sm={4} md={4} lg={1} xl={2} className='lg:text-right'>
                                    {
                                        info.parentId === comment.id ?
                                            <Button type="primary" size='small' onClick={() => setInfo(defaultInfo)}>取消</Button> :
                                            <Button type="primary" size='small' onClick={() => setInfo({
                                                article: id,
                                                parentId: comment.id,
                                                nickName: comment.nickName
                                            })}>回复</Button>
                                    }
                                </Col>
                            </Row>
                            {
                                info.parentId === comment.id &&
                                <div className="p-4"><CommentForm info={info} handelFinished={handelFinished}/></div>
                            }
                        </div>))
                }
            </Spin>
        </div>
    </>
}

export default Comment