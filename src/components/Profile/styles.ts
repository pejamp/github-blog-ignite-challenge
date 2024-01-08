import styled from 'styled-components'

export const ProfileContainer = styled.div`
  padding: 2rem 2.5rem;
  min-height: 13.25rem;

  display: flex;
  gap: 32px;

  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`

export const ProfileImage = styled.span`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`

export const ProfileInfo = styled.div`
  flex: 1;
  width: 100%;
  padding-top: 0.5rem;

  p {
    color: ${(props) => props.theme['base-text']};
    margin-bottom: 1.5rem;
  }
`

export const HeaderInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
  }
`

export const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

export const BioInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme['base-subtitle']};

  svg {
    width: 18px;
    height: 18px;
    color: ${(props) => props.theme['base-label']};
  }
`

export const SkeletonContainer = styled.div`
  padding: 2rem 2.5rem;
  min-height: 13.25rem;

  display: flex;
  gap: 32px;

  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  .skeleton__info {
    flex: 1;
  }
`

export const SkeletonImage = styled.span`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`
