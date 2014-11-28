/**
 * @jsx React.DOM
 */

var React = require('react');

var Nav = React.createClass({

  render: function() {
    return (
      <nav className="nav">
        <div className="nav-logo">
          <img src={'images/logo.png'} />
        </div>
        <div className="right">
          <a>
            Sair
          </a>
        </div>
      </nav>
    );
  }
});

module.exports = Nav;
