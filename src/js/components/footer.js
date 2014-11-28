var React = require('react');

var Footer = React.createClass({

  render: function() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="left social">
            <ul>
              <li><a href="#">ship@getupcloud.com</a></li>
              <li><a href="#">twitter.com/getupcloud</a></li>
              <li><a href="#">fb.com/getupcloud</a></li>
            </ul>
          </div>
          <div className="right grow-in">
            <div className="grow-in-link">
              <a href="">www.getupcloud.com</a>
              <div className="grow-in-title">GROW IN THE CLOUD</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

});

module.exports = Footer;
