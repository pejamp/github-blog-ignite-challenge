import styled from 'styled-components'

export const InputContainer = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  transition: all 200ms ease-in-out;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
