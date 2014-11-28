var React = require('react');

var CanvasMenu = React.createClass({

  render: function() {
    return (
      <div className="canvas-menu">
        <ul>
          <li className="sidemenu-item"><a href=""><i className="fa fa-user"></i> mateus@getupcloud.com</a></li>
          <li className="sidemenu-item"><a href="">Aplicações <i className="fa fa-angle-right right medium-font"></i></a></li>
          <li className="sidemenu-item"><a href="">Minha conta <i className="fa fa-angle-right right medium-font"></i></a></li>
          <li className="sidemenu-item"><a href="">Configurações <i className="fa fa-angle-right right medium-font"></i></a></li>
          <li className="sidemenu-item"><a href="">Ajuda <i className="fa fa-angle-right right medium-font"></i></a></li>
        </ul>
      </div>
    );
  }

});

module.exports = CanvasMenu;
