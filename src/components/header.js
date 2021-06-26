import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Navbar, Nav, Container } from "react-bootstrap"
import * as headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => (
<Navbar bg="primary" variant="dark" className={headerStyles.navLinks}>
<Container>
<Navbar.Brand><Link to="/" style={{textDecoration:'none', color:'#ffffff'}}>{siteTitle}</Link></Navbar.Brand>
<Nav className="me-auto">
  <Nav.Link><Link to="/">Home</Link></Nav.Link>
  <Nav.Link><Link to="/about">About</Link></Nav.Link>
  <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
</Nav>
</Container>
</Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
