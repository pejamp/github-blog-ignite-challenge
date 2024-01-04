import styled from 'styled-components'

export const PostContainer = styled.main`
  max-width: 54rem;
  margin: 0 auto;
  padding-bottom: 4rem;
`

export const PostInfo = styled.div`
  min-height: 10.5rem;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin-top: -5.5rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }
`

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`

export const BioInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme['base-span']};

  svg {
    width: 18px;
    height: 18px;
    color: ${(props) => props.theme['base-label']};
  }
`

export const PostContent = styled.article`
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 24px;

  li {
    margin-left: 2em;
    display: list-item;
    text-align: -webkit-match-parent;
    list-style: disc;
  }

  code {
    display: block;
    white-space: pre-wrap;
  }
`
