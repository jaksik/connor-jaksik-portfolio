import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      // backgroundImage: `linear-gradient(black 60%, rgba(0, 0, 0, 0))`,
      marginBottom: `1.45rem`,
      position: `fixed`,
      width: `100%`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <p style={{ margin: 0, textAlign:`right` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginRight:`20px`
          }}
        >
          Home
        </Link>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginRight:`20px`
          }}
        >
          About
        </Link>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginRight:`20px`

          }}
        >
          Contact
        </Link>
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
