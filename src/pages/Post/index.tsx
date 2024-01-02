import { Link } from '../../components/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import {
  BioInfo,
  Info,
  Navigation,
  PostContainer,
  PostContent,
  PostInfo,
} from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostInfo>
        <Navigation>
          <Link icon={faChevronLeft} iconSide="left">
            voltar
          </Link>
          <Link icon={faArrowUpRightFromSquare}>ver no github</Link>
        </Navigation>
        <h1>JavaScript data types and data structures</h1>
        <Info>
          <BioInfo>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </BioInfo>
          <BioInfo>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </BioInfo>
          <BioInfo>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </BioInfo>
        </Info>
      </PostInfo>
      <PostContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
        <code>
          let foo = 42; // foo is now a number foo = ‘bar’; // foo is now a
          string foo = true; // foo is now a boolean
        </code>
      </PostContent>
    </PostContainer>
  )
}
