"use strict";angular.module("main",["ui.router"]),function(e){e.service("ProgressService",function(){var e=0;this.increaseProgress=function(){e+=1},this.decreaseProgress=function(){e-=1},this.getProgress=function(){return e}})}(angular.module("main")),function(e){var t=['Read "High Performance Mobile Web" by Maximiliano Firtman.',"Integrate ngTouch on To-do list app.","Walk to Target to buy floss.","Donate Amazon boxes to Cat Shelter.","Register for AngularMix ft. John Papa & Dan Wahlin.",'Watch "Senior Devs react to React" on YouTube.',"Do 40 minutes of Standing Desk Yoga","Do 60 minutes of Start-Up Swiss Ball Calisthenics",'Watch "Silicone Valley" Season 4 on HBO.',"Pet a cow."],n=function e(t,n){var r=new Uint8Array(1);window.crypto.getRandomValues(r);var i=n-t+1;return r[0]>=Math.floor(256/i)*i?e(t,n):t+r[0]%i},r=function(e,t,r){if(t<1||r<1)return null;if(t===r)return e;if(t<r)return null;for(var i=[],s=r;s>0;){var o=n(0,t-1);i.includes(o)||(i.push(o),s-=1)}return i.map(function(t){return e[t]})},i=function(e,t){return{id:t,description:e,completed:!1}},s=function(e,t){var n=[];return e.map(function(e){return n.push(i(e,t.getID()))}),n},o=function(e){var n=r(s(t,e),10,6);return{getTasks:function(){return n}}};o.$inject=["TaskIDService"],e.factory("TaskDataService",o)}(angular.module("main")),function(e){function t(){var e=0;return{getID:function(){return e++}}}e.factory("TaskIDService",t)}(angular.module("main")),function(e){e.directive("dhProgressDisk",["ProgressService",function(e){return{templateUrl:"components/progressDisk/progressDisk.html",scope:{size:"<",thickness:"<",fill:"<",cycle:"<"},link:function(t,n,r){var i=$("#disk",n),s=$("#progress",n),o=2.5*Math.PI*-1;s.css("color",t.fill),t.$watch(e.getProgress,function(e,n){i.circleProgress({value:e/t.cycle,size:t.size>=150?t.size:150,startAngle:o,thickness:t.thickness<=t.size/2&&t.thickness>=3?t.thickness:10,fill:t.fill?t.fill:"white"}).on("circle-animation-progress",function(e,t,n){var r=(100*n).toFixed(0);if(100==r)return s.text(""),s.css("font-size","500%"),void s.append('<i class="fa fa-trophy" aria-hidden="true"></i>');s.text(r)})})}}}])}(angular.module("main")),function(e){var t=function(e,t){this.taskList=e.getTasks(),this.showTasks=!1,this.flipShowTasks=function(){this.showTasks=!this.showTasks},this.flip=function(e){var n=this.taskList.filter(function(t){return t.id===e})[0];n.completed=!n.completed,n.completed?t.increaseProgress():t.decreaseProgress()}};e.component("dhTaskboard",{templateUrl:"components/taskboard/taskboard.html",bindings:{taskboardTitle:"@"},controller:["TaskDataService","ProgressService",t]})}(angular.module("main")),function(e){e.component("dhTask",{templateUrl:"components/task/task.html",bindings:{description:"@",state:"<",taskId:"<",flip:"&"}})}(angular.module("main"));