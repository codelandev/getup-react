/**
 * @jsx React.DOM
 */

var React    = require('react');
var Nav      = require('./components/nav');
var Sidemenu = require('./components/sidemenu');
var CanvasMenu   = require('./components/canvas');

React.render(<Nav />, document.querySelector('.navbar'));
React.render(<Sidemenu />, document.querySelector('.sidemenus'));
React.render(<CanvasMenu />, document.querySelector('.canvas'));


var $ = require('jquery');

// ======= Tabs

$('.tab-nav a').on('click', function (e) {
  var currentValue = $(this).attr('href');
  $('.tab ' + currentValue).show().siblings().hide();
  $(this).parent('li').addClass('active').siblings().removeClass('active');
  e.preventDefault();
  e.stopPropagation();
});

// ======= Canvas menu

var sidemenuButton = $('.sidemenu-button'),
    canvasMenu     = $('.canvas-menu'),
    sidemenu       = $('.sidemenu');

sidemenuButton.on('click', function (e) {
  if (sidemenu.hasClass('active')) {
    $('.sidemenu').removeClass('active');
    canvasMenu.animate({
      left: '-500px'
    }, 500);
  } else {
    $('.sidemenu').addClass('active');
    canvasMenu.animate({
      left: '70px'
    }, 500);
  }
});

// ======= Question mark

var cartBox = $('.cart-box');

cartBox.hover(function () {
  var questionMark = $(this).find('.cart-question');
  questionMark.fadeToggle();
})
