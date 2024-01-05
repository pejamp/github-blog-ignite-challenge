/* eslint-disable react/no-children-prop */
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import rangeParser from 'parse-numeric-range'
import { useTheme } from 'styled-components'
import { useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { apiGithubIssues } from '../../lib/axios'
import { Link } from '../../components/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import {
  createdDateFormatted,
  createdDateRelativeToNow,
} from '../../utils/formatter'
import {
  BioInfo,
  Info,
  Navigation,
  PostContainer,
  PostContent,
  PostHeader,
} from './styles'

interface IPost {
  html_url: string
  title: string
  created_at: string
  comments: number
  user: { login: string }
  body: string
}

export function Post() {
  const { postNumber } = useParams()
  const [post, setPost] = useState<IPost>({} as IPost)
  const colors = useTheme()

  const fetchPost = useCallback(async () => {
    const response = await apiGithubIssues.get(
      `pejamp/github-blog-ignite-challenge/issues/${postNumber}`,
    )
    setPost(response.data)
    console.log(response.data)
  }, [postNumber])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return (
    <PostContainer>
      <PostHeader>
        <Navigation>
          <Link
            url="/"
            openInNewTab={false}
            icon={faChevronLeft}
            iconSide="left"
          >
            voltar
          </Link>
          <Link url={post.html_url} icon={faArrowUpRightFromSquare}>
            ver no github
          </Link>
        </Navigation>
        <h1>{post.title}</h1>
        <Info>
          <BioInfo>
            <FontAwesomeIcon icon={faGithub} />
            {post.user?.login}
          </BioInfo>
          <BioInfo>
            <FontAwesomeIcon icon={faCalendarDay} />
            <time
              title={createdDateFormatted(post.created_at)}
              dateTime={post.created_at}
            >
              {createdDateRelativeToNow(post.created_at)}
            </time>
          </BioInfo>
          <BioInfo>
            <FontAwesomeIcon icon={faComment} />
            {post.comments} comentários
          </BioInfo>
        </Info>
      </PostHeader>
      <PostContent>
        <Markdown
          children={post.body}
          className={'line-break'}
          components={{
            code({ node, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')

              if (!match) {
                return <code className={className} {...props} />
              }

              const meta = node?.data as string | undefined

              const applyHighlights: lineTagPropsFunction = (highlights) => {
                if (!meta) {
                  return {}
                }

                const regex = /{([\d,-]+)}/
                const metadata = meta.replace(/\s/g, '')
                const strlineNumbers = regex.test(metadata)
                  ? regex.exec(metadata)![1]
                  : '0'

                const highlightLines = rangeParser(strlineNumbers)
                const data = highlightLines.includes(highlights)
                  ? 'highlight'
                  : undefined

                return { data }
              }

              return (
                <SyntaxHighlighter
                  useInlineStyles
                  children={String(children).replace(/\s$/g, '')}
                  language={match[1]}
                  wrapLines={!!meta}
                  lineProps={applyHighlights}
                  style={
                    {
                      ...vscDarkPlus,
                      'code[class*="language-"]': {
                        ...vscDarkPlus['code[class*="language-"]'],
                        backgroundColor: colors['base-post'],
                        color: colors['base-markdown'],
                        fontSize: '1rem',
                      },
                      'pre[class*="language-"]': {
                        ...vscDarkPlus['pre[class*="language-"]'],
                        backgroundColor: colors['base-post'],
                        color: colors['base-markdown'],
                      },
                    } as never
                  }
                />
              )
            },
          }}
        />
      </PostContent>
    </PostContainer>
  )
}
