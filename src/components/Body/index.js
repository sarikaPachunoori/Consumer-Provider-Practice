import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-cont">
          {showLeftNavbar ? (
            <div className="left-nav-cont">
              <h1 className="heading">Left Navbar Menu</h1>
              <ul className="list-cont ">
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3 </li>
                <li className="item">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-cont">
              <h1 className="heading">Content</h1>
              <p className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : (
            ' '
          )}
          {showRightNavbar ? (
            <div className="left-nav-cont">
              <h1 className="heading">Right Navbar</h1>
              <ul className="list-cont">
                <li className="ad-box">Ad 1</li>
                <li className="ad-box">Ad 2</li>
              </ul>
            </div>
          ) : (
            ' '
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
