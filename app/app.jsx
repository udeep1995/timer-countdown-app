var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');
//Load foundation
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');
$(document).foundation();
require('!style-loader!css-loader!applicationStyles')
ReactDOM.render(
  <Router history = {hashHistory}>
      <Route path="/" component = {Main}>
        <IndexRoute component={Timer}></IndexRoute>
        <Route path='/countdown' component={Countdown}></Route>
      </Route>
  </Router>, document.getElementById('app'));
