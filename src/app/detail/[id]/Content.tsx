import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'
import rehypeRaw from 'rehype-raw';
import '@/assets/style/detail.scss'
import Copy from "@/app/detail/[id]/Copy";


const Content: React.FC<{ content: string }> = ({content}) => {

    return <div className='md:max-w-[1000px] mx-auto lg:p-8 p-4 fuck-shadow rounded detail-content'>
            <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    code(props) {
                        const {children, className = 'language-shell', node, ...rest} = props
                        const match = /language-(\w+)/.exec(className || '')
                        // @ts-ignore
                        const showLineNumbers = String(children).split('\n').length > 2
                        return match ? (
                            <div className='relative'>
                                <Copy code={String(children)} />
                                <SyntaxHighlighter
                                    {...rest}
                                    showLineNumbers={showLineNumbers}
                                    PreTag="div"
                                    language={match[1]}
                                    style={vscDarkPlus}
                                    customStyle={{padding: '20px 0 0'}}
                                    ref={null}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            </div>

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