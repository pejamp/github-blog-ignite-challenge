import styled from 'styled-components'

export const PostCardContainer = styled.div`
  max-width: 26rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 2rem;
  height: 16.25rem;
  border-radius: 10px;
  border: 2px solid transparent;
  background-color: ${(props) => props.theme['base-post']};

  -webkit-box-orient: vertical;

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
    transition: border-color 300ms ease-in-out;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const PostCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;

  a {
    text-decoration: none;
  }

  h3 {
    flex: 1;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
  }

  time {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`
