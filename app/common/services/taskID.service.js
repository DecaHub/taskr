"use strict";

/**
 * Progress Service
 * @namespace CommonServices
 */

(function (app) {
	
	/**
	 * @function TaskIDService
	 * @description Creates a unique ID for a task.
	 */
	
	const TaskIDService = function () {
		
		let taskID = 0;
		
		const increaseTaskID = function () {
			
			taskID += 1;
			
			return taskID;
			
		};
		
		return {getID: increaseTaskID};
		
	};
	
	app.factory("TaskIDService", TaskIDService);
	
}(angular.module("main")));
