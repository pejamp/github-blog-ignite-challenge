import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const createdDateRelativeToNow = (date: string) => {
  if (date) {
    return formatDistanceToNow(new Date(date), {
      locale: ptBR,
      addSuffix: true,
    })
  }
}

export const createdDateFormatted = (date: string) => {
  if (date) {
    return format(date, "d 'de' LLL 'às' HH:mm'h'", {
      locale: ptBR,
    })
  }
}
