import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const ToggleShowContent = () => {
        onToggleShowContent()
      }
      const ToggleShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const ToggleShowRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="config-cont">
          <h1 className="layout-heading">Layout</h1>
          <div className="label-cont">
            <input
              type="checkbox"
              value={showContent}
              onChange={ToggleShowContent}
              checked={showContent}
              id="content"
            />
            <label className="checkbox-name" htmlFor="content">
              Content
            </label>
          </div>
          <div className="label-cont">
            <input
              type="checkbox"
              value={showLeftNavbar}
              onChange={ToggleShowLeftNavbar}
              checked={showLeftNavbar}
              id="left"
            />
            <label className="checkbox-name" htmlFor="left">
              Left Navbar
            </label>
          </div>
          <div className="label-cont">
            <input
              type="checkbox"
              value={showRightNavbar}
              onChange={ToggleShowRightNavbar}
              checked={showRightNavbar}
              id="right"
            />
            <label className="checkbox-name" htmlFor="right">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
