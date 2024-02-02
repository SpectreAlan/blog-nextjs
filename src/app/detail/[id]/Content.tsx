import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeRaw from 'rehype-raw';
import '@/assets/style/detail.scss'
import Copy from "@/app/detail/[id]/Copy";

const Content: React.FC<{ content: string }> = ({content}) => {

    return <div className='md:max-w-[1000px] mx-auto p-8 fuck-shadow rounded detail-content'>
        <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
                code(props) {
                    const {children, className, node, ...rest} = props
                    const match = /language-(\w+)/.exec(className || '')
                    return match ? (
                        <SyntaxHighlighter
                            {...rest}
                            PreTag="div"
                            language={match[1]}
                            style={vscDarkPlus}
                            customStyle={{position: 'relative'}}
                            renderer={() => <>
                                <Copy code={String(children)} />
                                {String(children).replace(/\n$/, '')}</>}
                        />
                    ) : (
                        <code {...rest} className={`${className}`}>
                            {children}
                        </code>
                    )
                }
            }}
        >
            {content}
        </Markdown>
    </div>
}

export default Content