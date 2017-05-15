"use strict";function TaskIDService(){var e=0;return{getID:function(){return e++}}}angular.module("main",["ui.router"]),angular.module("main").controller("MainController",function(){}),angular.module("main").service("ProgressService",function(){var e=0;this.increaseProgress=function(){e+=1},this.decreaseProgress=function(){e-=1},this.getProgress=function(){return e}});var taskDescriptions=['Read "High Performance Mobile Web" by Maximiliano Firtman.',"Integrate ngTouch on To-do list app.","Walk to Target to buy floss.","Donate Amazon boxes to Cat Shelter.","Register for AngularMix ft. John Papa & Dan Wahlin.",'Watch "Senior Devs react to React" on YouTube.',"Do 40 minutes of Standing Desk Yoga","Do 60 minutes of Start-Up Swiss Ball Calisthenics",'Watch "Silicone Valley" Season 4 on HBO.',"Pet a cow."],getRandomInt=function e(t,r){var n=new Uint8Array(1);window.crypto.getRandomValues(n);var s=r-t+1;return n[0]>=Math.floor(256/s)*s?e(t,r):t+n[0]%s},randomizeTaskList=function(e,t,r){if(t<1||r<1)return null;if(t===r)return e;if(t<r)return null;for(var n=[],s=r;s>0;){var a=getRandomInt(0,t-1);n.includes(a)||(n.push(a),s-=1)}return n.map(function(t){return e[t]})},createTask=function(e,t){return{id:t,description:e,completed:!1}},createTaskList=function(e,t){var r=[];return e.map(function(e){return r.push(createTask(e,t.getID()))}),r},TaskDataService=function(e){var t=randomizeTaskList(createTaskList(taskDescriptions,e),10,6);return{getTasks:function(){return t}}};angular.module("main").factory("TaskDataService",TaskDataService),TaskDataService.$inject=["TaskIDService"],angular.module("main").factory("TaskIDService",TaskIDService),function(e){var t=function(e,t){this.taskList=e.getTasks(),this.showTasks=!1,this.flipShowTasks=function(){this.showTasks=!this.showTasks},this.flip=function(e){var r=this.taskList.filter(function(t){return t.id===e})[0];r.completed=!r.completed,r.completed?t.increaseProgress():t.decreaseProgress()}};e.component("dhTaskboard",{templateUrl:"components/taskboard/taskboard.html",bindings:{taskboardTitle:"@"},controller:["TaskDataService","ProgressService",t]})}(angular.module("main")),angular.module("main").directive("dhProgressDisk",["ProgressService",function(e){return{templateUrl:"components/progressDisk/progressDisk.html",scope:{size:"<",thickness:"<",fill:"<",cycle:"<"},link:function(t,r,n){var s=$("#disk",r),a=$("#progress",r),i=2.5*Math.PI*-1;a.css("color",t.fill),t.$watch(e.getProgress,function(e,r){s.circleProgress({value:e/t.cycle,size:t.size>=150?t.size:150,startAngle:i,thickness:t.thickness<=t.size/2&&t.thickness>=3?t.thickness:10,fill:t.fill?t.fill:"white"}).on("circle-animation-progress",function(e,t,r){var n=(100*r).toFixed(0);if(100==n)return a.text(""),a.css("font-size","500%"),void a.append('<i class="fa fa-trophy" aria-hidden="true"></i>');a.text(n)})})}}}]),angular.module("main").component("dhTask",{templateUrl:"components/task/task.html",bindings:{description:"@",state:"<",taskId:"<",flip:"&"}});