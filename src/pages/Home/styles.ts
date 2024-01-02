import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 54rem;
  margin: 0 auto;
  padding-bottom: 4rem;
`

export const ProfileSection = styled.section`
  margin-bottom: 4.5rem;
  margin-top: -5.5rem;
`

export const PostsSection = styled.section`
  form {
    margin-bottom: 3rem;
  }
`

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-weight: 700;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`

export const PostsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`
