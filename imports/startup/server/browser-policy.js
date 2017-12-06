import { BrowserPolicy } from 'meteor/browser-policy-common';
// e.g., BrowserPolicy.content.allowOriginForAll( 's3.amazonaws.com' );
BrowserPolicy.content.allowFontOrigin("data:");
BrowserPolicy.content.allowOriginForAll('*.googleapis.com');
  BrowserPolicy.content.allowOriginForAll('*.gstatic.com');
  BrowserPolicy.content.allowEval('https://ajax.googleapis.com');
  BrowserPolicy.content.allowEval('http://fonts.googleapis.com');
BrowserPolicy.content.allowEval('//fonts.googleapis.com/css?family=Roboto:300,400,500,700');
BrowserPolicy.content.allowEval('//fonts.googleapis.com/icon?family=Material+Icons');

BrowserPolicy.content.allowEval('//https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js');
BrowserPolicy.content.allowEval('//https://code.jquery.com/jquery-3.1.1.slim.min.js');
BrowserPolicy.content.allowEval('//https://unpkg.com/bootstrap-material-design@4.0.0-beta.4/dist/css/bootstrap-material-design.min.css');
BrowserPolicy.content.allowEval('//https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js');
BrowserPolicy.content.allowEval('https://unpkg.com/bootstrap-material-design@4.0.0-beta.4/dist/js/bootstrap-material-design.js');


BrowserPolicy.content.allowEval('//https://graph.facebook.com');
