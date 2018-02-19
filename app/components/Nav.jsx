var React = require('react');
var {Link, IndexLink} = require('react-router');
require('!style-loader!css-loader!navcss')
var Main = React.createClass({
  render: function() {
    return (
      <div>
        <div className="top-bar nav-color" id="responsive-menu">
          <div className="top-bar-left nav-color">
            <ul className="dropdown menu nav-color" data-dropdown-menu>
              <li className="menu-text">Time App</li>
              <li><IndexLink activeClassName="active-link" to="/">Timer</IndexLink></li>
              <li><Link activeClassName="active-link" to="/countdown">Countdown</Link></li>
            </ul>
          </div>
      </div>
    </div>
    )
  }
})

module.exports = Main;
