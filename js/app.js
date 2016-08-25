var myApp = angular.module('myApp', []);

var data = new Data(myApp);
data.apps('Main');

var dataParse = new DataParse(myApp);
dataParse.someData();
