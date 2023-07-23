import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-container">
    <p className="head-logo">Registration</p>
    <div className="link-container">
      <Link to="/" className="link-item">
        Register
      </Link>
      <Link to="/users" className="link-item">
        Users
      </Link>
    </div>
  </nav>
)
export default Header
