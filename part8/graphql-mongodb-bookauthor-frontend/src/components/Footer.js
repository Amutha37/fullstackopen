import styled from 'styled-components'

let Footerr = styled.div`
  background: Chocolate;
  padding: 1em;
`
const Footer = () => (
  <Footerr>
    <div>
      <i>Book List App, Department of Computer Science 2023</i>
    </div>
    Book List App for Part8 -{' '}
    <a href='https://fullstackopen.com/'>Full Stack Open</a>.
  </Footerr>
)

export default Footer
