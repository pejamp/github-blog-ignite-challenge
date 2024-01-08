import Skeleton from 'react-loading-skeleton'
import { SkeletonContainer } from './styles'

export function PostCardSkeleton({ cards }: { cards: number }) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <SkeletonContainer key={i}>
        <div>
          <Skeleton width="70%" height={20} />
        </div>
        <div>
          <Skeleton count={4} />
        </div>
      </SkeletonContainer>
    ))
}
