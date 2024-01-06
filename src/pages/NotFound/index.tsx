import { faFaceFrown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from './styles'

export function NotFound() {
  return (
    <Container>
      <FontAwesomeIcon icon={faFaceFrown} />
      <div>
        <h1>404 - Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </Container>
  )
}
