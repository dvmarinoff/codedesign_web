var lorem="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, enim, ipsam, voluptatum, quaerat id voluptas ea eum cumque dolorem eos dolores quibusdam suscipit deleniti iste doloremque officia sunt! Fugit, cupiditate.",postsArray=[{date:"8/6/2014",subject:"Lorem",author:"CBD",header:"Lorem Ipsum Dolor Sit Amet",content:lorem},{date:"9/6/2014",subject:"Sit",author:"CBD",header:"Lorem Ipsum Dolor Sit Amet",content:lorem}],projectsArray=[{name:"Customers App",technologies:"HTML, CSS, Angular.js",description:"Customers and orders menagement web app",image:"../images/customers-1.png"},{name:"Greed",technologies:"C# .NET Framework",description:"The classic greed game, developed in a team",image:"../images/greed-1.png"},{name:"Loch Ness Theme",technologies:"HTML5",description:"A static theme for academy homework presentations",image:"../images/loch-ness-1.png"},{name:"Responsive Grid Theme",technologies:"HTML, CSS, JS",description:"Helps presenting JavaScript Algorithmic homeworks with Input/Output functionality",image:"../images/responsive-grid-lg.png"},{name:"McGallery",technologies:"HTML, CSS, jQuery",description:"A simple image gallery with lots of jQuery animations",image:"../images/mcgallery-1.png"}],app=angular.module("codeApp",["ngCookies","ngResource","ngSanitize","ngRoute","ngAnimate"]);app.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/projects",{templateUrl:"views/projects.html",controller:"ProjectsCtrl"}).when("/blog",{templateUrl:"views/blog.html",controller:"BlogCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).otherwise({redirectTo:"/"})}]);var app=angular.module("codeApp");app.controller("MainCtrl",["$scope",function(a){a.viewName="main view",a.ctrlName="main controller"}]),app.controller("AboutCtrl",["$scope",function(a){a.viewName="about view",a.ctrlName="about controller"}]),app.controller("ProjectsCtrl",["$scope",function(a){a.viewName="projects view",a.ctrlName="projects controller",a.projects=projectsArray}]),app.controller("BlogCtrl",["$scope",function(a){a.posts=postsArray}]),app.controller("ContactCtrl",["$scope",function(a){a.viewName="contacts view",a.ctrlName="contacts controller"}]),function(){"use strict";function a(){c.animate({left:0},g),e.animate({left:200},g),d+=200}function b(){c.animate({left:-200},g),e.animate({left:0},g),d-=200}var c=$("#mobile-nav"),d=parseInt(c.css("left")),e=$("#container-view"),f=($("#container-view").css("left"),$("#btn-toggle")),g=1e3;f.on("click",function(){-200==d?a():b()}),"none"==c.css("display")&&(console.log(c.css("display")),e.css("left",0))}();