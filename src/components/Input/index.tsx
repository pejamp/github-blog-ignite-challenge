import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

export function Input(rest: InputHTMLAttributes<HTMLInputElement>) {
  return <InputContainer type="text" placeholder="Buscar conteúdo" {...rest} />
}
