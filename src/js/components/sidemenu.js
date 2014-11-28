/**
 * @jsx React.DOM
 */

var React = require('react');

var Sidemenu = React.createClass({

  render: function() {
    return (
      <aside className="sidemenu">
        <ul className="sidemenu-list">
          <li className="sidemenu-item">
            <a className="sidemenu-button">
              <div className="bars">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </li>
          <li className="sidemenu-item">
            <a><i className="fa fa-cloud"></i></a>
          </li>
          <li className="sidemenu-item">
            <a><i className="fa fa-user"></i></a>
          </li>
          <li className="sidemenu-item">
            <a><i className="fa fa-gears"></i></a>
          </li>
          <li className="sidemenu-item">
            <a><i className="fa fa-question-circle"></i></a>
          </li>
        </ul>
      </aside>
    );
  }
});

module.exports = Sidemenu;
