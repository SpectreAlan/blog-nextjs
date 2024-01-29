import React, {useState} from 'react'
import {List, Modal, Input, message} from 'antd';
import {useRouter} from "next/navigation";
import useFetch from "@/hooks/useFetch";

interface IProps {
    setSearchModal: (visible: boolean) => void
}

const Search: React.FC<IProps> = ({setSearchModal}) => {

    const router = useRouter()
    const [keywords, setKeywords] = useState('');
    const {response, loading, handleFetch} = useFetch<{ list: Article.ArticleItem[] }>({
        url: '/blog/list',
        method: 'GET',
        data: {
            keywords
        }
    })

    const onSelect = (id: string) => {
        router.push(`/detail/${id}`)
    }
    const onSearch = async () => {
        if (!keywords) {
            message.info('老铁，请输入关键字');
            return
        }
        handleFetch()
    };
    return <Modal
        closeIcon={false}
        footer={null}
        onCancel={() => setSearchModal(false)}
        open={true}
        destroyOnClose
    >
        <Input.Search
            placeholder="关键字模糊搜索..."
            onSearch={onSearch} allowClear
            onChange={(e) => setKeywords(e.target.value)}
            value={keywords}
            className='mb-2'
        />
        <List
            size="small"
            loading={loading}
            bordered
            dataSource={response?.list || []}
            renderItem={(item) => (
                <List.Item className='hover:bg-gray-200 cursor-pointer' onClick={() => onSelect(item.id)}>
                    {item.title}
                </List.Item>
            )}
        />
    </Modal>
}

export default Search