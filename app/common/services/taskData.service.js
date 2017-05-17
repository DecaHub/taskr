"use strict";

/* eslint-disable quotes */

/* eslint no-extra-parens: ["error", "all", { "nestedBinaryExpressions": false }] */

/**
 * Progress Service
 * @namespace CommonServices
 */

(function (app) {
	
	const taskDescriptions = [
		`Read "High Performance Mobile Web" by Maximiliano Firtman.`,
		`Integrate ngTouch on To-do list app.`,
		`Walk to Target to buy floss.`,
		`Donate Amazon boxes to Cat Shelter.`,
		`Register for AngularMix ft. John Papa & Dan Wahlin.`,
		`Watch "Senior Devs react to React" on YouTube.`,
		`Do 40 minutes of Standing Desk Yoga`,
		`Do 60 minutes of Start-Up Swiss Ball Calisthenics`,
		`Watch "Silicon Valley" Season 4 on HBO.`,
		`Pet a cow.`
	];
	
	const getRandomInt = function (min, max) {
		
		/**
		 * Source: http://stackoverflow.com/a/18230432/6051978
		 */
		
		const byteArray = new Uint8Array(1);
		
		// For IE 11
		const cryptoObj = window.crypto || window.msCrypto;
		
		cryptoObj.getRandomValues(byteArray);
		
		const range = max - min + 1;
		
		const maxRange = 256;
		
		if (byteArray[0] >= Math.floor(maxRange / range) * range) {
			
			return getRandomInt(min, max);
			
		}
		
		return min + (byteArray[0] % range);
		
	};
	
	const randomizeTaskList = function (taskList, numOfTasks, maxNumberOfTasks) {
		
		if (numOfTasks < 1 || maxNumberOfTasks < 1) {
			
			return null;
			
		}
		
		if (numOfTasks === maxNumberOfTasks) {
			
			return taskList;
			
		}
		
		if (numOfTasks < maxNumberOfTasks) {
			
			return null;
			
		}
		
		
		const randomNumbersSet = [];
		let count = maxNumberOfTasks;
		
		while (count > 0) {
			
			const randNumber = getRandomInt(0, numOfTasks - 1);
			
			if (!randomNumbersSet.includes(randNumber)) {
				
				randomNumbersSet.push(randNumber);
				count -= 1;
				
			}
			
		}
		
		return randomNumbersSet.map((num) => taskList[num]);
		
	};
	
	const createTask = function (taskDescription, taskID) {
		
		return {
			
			id: taskID,
			description: taskDescription,
			completed: false
			
		};
		
	};
	
	const createTaskList = function (descriptions, TaskIDService) {
		
		const list = [];
		
		descriptions.map((description) => list.push(createTask(description, TaskIDService.getID())));
		
		return list;
		
	};
	
	const TaskDataService = function (TaskIDService) {
		
		const numberOfTasks = 10;
		const maxNumberOfTasks = 6;
		
		const taskList = randomizeTaskList(createTaskList(taskDescriptions, TaskIDService), numberOfTasks, maxNumberOfTasks);
		
		return {
			
			getTasks () {
				
				return taskList;
				
			}
			
		};
		
	};
	
	TaskDataService.$inject = ["TaskIDService"];
	
	/**
	 * @function TaskDataService
	 * @description Create and manage data for the application's available tasks
	 */
	
	app.factory("TaskDataService", TaskDataService);
	
}(angular.module("main")));


