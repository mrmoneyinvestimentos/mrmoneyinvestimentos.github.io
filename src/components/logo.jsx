import React from "react"
import { Link } from "gatsby"
import logo from '../assets/img/Simbol Fundo Transparente.png'

const Logo = (props) => (
  <div className="site-logo">
    <Link to="/">
      <img src={logo} alt="" />
      {props.title}
    </Link>
  </div>
)

export default Logo
