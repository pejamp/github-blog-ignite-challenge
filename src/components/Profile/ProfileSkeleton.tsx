import Skeleton from 'react-loading-skeleton'
import { SkeletonContainer, SkeletonImage } from './styles'

export function ProfileSkeleton() {
  return (
    <SkeletonContainer>
      <SkeletonImage>
        <Skeleton width={148} height={148} />
      </SkeletonImage>
      <div className="skeleton__info">
        <Skeleton width="50%" height={24} style={{ marginBottom: '.5rem' }} />
        <Skeleton count={2} />
      </div>
    </SkeletonContainer>
  )
}
