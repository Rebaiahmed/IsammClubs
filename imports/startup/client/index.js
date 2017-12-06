import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
//import 'bootstrap/dist/css/bootstrap.min.css';


import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';


import App from '../../ui/layouts/App.js';

Bert.defaults.style = 'growl-top-right';

Meteor.startup(() => {
/*  $.getScript('https://conektaapi.s3.amazonaws.com/v0.3.2/js/conekta.js', function(){
   // script has loaded
   //Session.set('conectaReady', true);
 });*/

//$(document).ready(function() { $('body').bootstrapMaterialDesign(); });
$(function() {
    $.material.init();
    //$('body').bootstrapMaterialDesign();
});
  render(<App />, document.getElementById('react-root'));
});
