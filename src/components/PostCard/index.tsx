import {
  createdDateFormatted,
  createdDateRelativeToNow,
} from '../../utils/formatter'
import removeMarkdown from 'markdown-to-text'
import { PostCardContainer, PostCardHeader } from './styles'
import { NavLink } from 'react-router-dom'

interface PostCardProps {
  postNumber: number
  title: string
  createdAt: string
  content: string
}

export function PostCard({
  postNumber,
  title,
  content,
  createdAt,
}: PostCardProps) {
  return (
    <PostCardContainer>
      <PostCardHeader>
        <NavLink to={`post/${postNumber}/${title}`}>
          <h3>{title}</h3>
        </NavLink>
        <time title={createdDateFormatted(createdAt)} dateTime={createdAt}>
          {createdDateRelativeToNow(createdAt)}
        </time>
      </PostCardHeader>
      <p>{removeMarkdown(content)}</p>
    </PostCardContainer>
  )
}
