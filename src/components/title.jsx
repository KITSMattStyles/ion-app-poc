
import PropTypes from 'prop-types'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 2.8rem;
`

const Title = ({text, children}) => (
  <H1>{children || text}</H1>
)

Title.propTypes = {
  text: PropTypes.string
}

Title.defaultProps = {
  text: null
}

export default Title
