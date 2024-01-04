import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.blue};
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.blue};
    transition: border-color 200ms ease-in;
  }
`
