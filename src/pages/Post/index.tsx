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
  BioInfo,
  Info,
  Navigation,
  PostContainer,
  PostContent,
  PostInfo,
} from './styles'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { apiGithubIssues } from '../../lib/axios'
import {
  createdDateFormatted,
  createdDateRelativeToNow,
} from '../../utils/formatter'
import Markdown from 'react-markdown'

interface IPost {
  html_url: string
  title: string
  created_at: Date
  comments: number
  user: { login: string }
  body: string
}

export function Post() {
  const params = useParams()
  const [post, setPost] = useState<IPost>({} as IPost)

  async function fetchPost() {
    const response = await apiGithubIssues.get(
      `pejamp/github-blog-ignite-challenge/issues/${params.postNumber}`,
    )
    setPost(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    fetchPost()
  }, [params])

  return (
    <PostContainer>
      <PostInfo>
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
            {/* <time
              title={createdDateFormatted(post.created_at)}
              dateTime={post.created_at}
            >
              {createdDateRelativeToNow(post.created_at)}
            </time> */}
            {post.created_at}
          </BioInfo>
          <BioInfo>
            <FontAwesomeIcon icon={faComment} />
            {post.comments} comentários
          </BioInfo>
        </Info>
      </PostInfo>
      <PostContent>
        <Markdown>{post.body}</Markdown>
      </PostContent>
    </PostContainer>
  )
}
