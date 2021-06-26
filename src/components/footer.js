import React from "react"
import { string } from "prop-types"

import * as footerStyles from "./footer.module.scss"

const Footer = ({ author }) => {
  return (
    <footer className={footerStyles.footer}>
      <div class="footer-copyright text-center py-3">
        {" "}
        © {new Date().getFullYear()}, Made with ❤ by{" "}
        <a href="https://www.linkedin.com/in/kalyani-appani-01633014b/" target="_blank"> {author}</a>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  author: "",
}
Footer.propTypes = {
  author: string,
}

export default Footer
