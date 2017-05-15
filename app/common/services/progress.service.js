"use strict";

/* eslint-disable no-invalid-this */

/**
 * Progress Service
 * @namespace CommonServices
 */

(function (app) {
	
	/**
	 * @function ProgressService
	 * @description Track the number of tasks that have been marked as complete
	 */
	
	app.service("ProgressService", function () {
		
		let tasksCompleted = 0;
		
		this.increaseProgress = function () {
			
			tasksCompleted += 1;
			
		};
		
		this.decreaseProgress = function () {
			
			tasksCompleted -= 1;
			
		};
		
		this.getProgress = function () {
			
			return tasksCompleted;
			
		};
		
	});
	
}(angular.module("main")));
