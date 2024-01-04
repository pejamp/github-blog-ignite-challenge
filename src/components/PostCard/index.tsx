import {
  createdDateFormatted,
  createdDateRelativeToNow,
} from '../../utils/formatter'
import removeMarkdown from 'markdown-to-text'
import { PostCardContainer, PostCardHeader } from './styles'

interface PostCardProps {
  title: string
  createdAt: string
  content: string
}

export function PostCard({ title, content, createdAt }: PostCardProps) {
  return (
    <PostCardContainer>
      <PostCardHeader>
        <h3>{title}</h3>
        <time title={createdDateFormatted(createdAt)} dateTime={createdAt}>
          {createdDateRelativeToNow(createdAt)}
        </time>
      </PostCardHeader>
      <p>{removeMarkdown(content)}</p>
    </PostCardContainer>
  )
}
