import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'

const Layout = () => (
  <div className="layout-main-cont">
    <div className="layout-cont">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default Layout
