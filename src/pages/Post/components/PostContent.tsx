/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type PostContentProps = {
  text: string
}

const draculaTheme = dracula as any

export function PostContent({ text }: PostContentProps) {
  return (
    <main className="flex flex-col gap-4 mb-32 py-10 px-8">
      <ReactMarkdown
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            const highlighter = String(children).replace(/\n$/, '')

            return !inline && match ? (
              <SyntaxHighlighter
                style={draculaTheme}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {highlighter}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {text}
      </ReactMarkdown>
    </main>
  )
}
