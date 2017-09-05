var random = require('./random');
var ready = require('./ready');

ready(function () {
  document.getElementsByTagName('body')[0].innerHTML = random();
});
