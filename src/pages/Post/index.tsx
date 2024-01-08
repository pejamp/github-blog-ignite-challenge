/* eslint-disable react/no-children-prop */
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import rangeParser from 'parse-numeric-range'
import { useTheme } from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
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
  MarkdownSkeleton,
  Navigation,
  PostContainer,
  PostContent,
  PostHeader,
  PostHeaderSkeleton,
} from './styles'
import { AxiosError } from 'axios'
import Skeleton from 'react-loading-skeleton'

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
  const navigate = useNavigate()
  const colors = useTheme()
  const [post, setPost] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await apiGithubIssues.get(
          `pejamp/github-blog-ignite-challenge/issues/${postNumber}`,
        )
        setPost(response.data)
      } catch (error: unknown) {
        const newError = error as AxiosError
        if (newError.response?.status === 404) {
          navigate('/404-NotFound')
        }
      }
      setIsLoading(false)
    }
    fetchPost()
  }, [postNumber, navigate])

  return (
    <PostContainer>
      {isLoading ? (
        <PostHeaderSkeleton>
          <div>
            <Skeleton width="70%" style={{ marginBottom: '1rem' }} />
          </div>
          <div>
            <Skeleton count={2} />
          </div>
        </PostHeaderSkeleton>
      ) : (
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
      )}
      <PostContent>
        {isLoading && (
          <MarkdownSkeleton>
            <Skeleton count={4} style={{ marginBottom: '0.5rem' }} />
          </MarkdownSkeleton>
        )}
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
                        padding: '16px',
                        borderRadius: '2px',
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
