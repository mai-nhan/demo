var app = angular.module('demo', ['ngSanitize']);
app.controller('controllerAC', ['$scope', '$sce', '$http', '$timeout', function ($scope, $sce, $http, $timeout) {	
	$scope.name='___';
}]);
function update1(jscolor) {
    // 'jscolor' instance can be used as a string
    document.getElementById('pp-name').style.backgroundColor ='#'+jscolor;
}
function update2(jscolor) {
    // 'jscolor' instance can be used as a string
    document.getElementById('ppp1').style.border = '2px solid '+'#' + jscolor;
    document.getElementById('ppp2').style.border = '2px solid '+'#' + jscolor;
}
function setColor1(){
	document.getElementById('pp-name').style.backgroundColor='#000000';
	return '000000';
}
function setColor2(){
	document.getElementById('ppp1').style.border = '2px solid '+'#66C8C7';
	document.getElementById('ppp2').style.border = '2px solid '+'#66C8C7';
	return '66C8C7';
}
