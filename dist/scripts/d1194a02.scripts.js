"use strict";angular.module("proGridApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("proGridApp").controller("MainCtrl",["$scope",function(a){var b=io.connect("http://localhost:9001");b.on("update",function(a){console.log(a);var b=".col_"+a.row+"_"+a.col,c=document.querySelector(b);c.className.indexOf("black")>-1?(c.className=c.className.replace("black",""),console.log("if")):(c.className=c.className+" black",console.log("else"))}),a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.dimensions=16,a.generateGrid=function(a){return new Array(a)},a.gridClicked=function(a,c){b.emit("clicked",{row:a,col:c})}}]);