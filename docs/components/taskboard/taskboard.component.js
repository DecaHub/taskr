"use strict";

(function (app) {

	var TaskController = function TaskController(TaskDataService, ProgressService) {

		this.taskList = TaskDataService.getTasks();

		this.showTasks = false;

		this.flipShowTasks = function () {

			this.showTasks = !this.showTasks;
		};

		this.flip = function (taskID) {

			var task = this.taskList.filter(function (taskItem) {
				return taskItem.id === taskID;
			})[0];

			task.completed = !task.completed;

			if (task.completed) {

				ProgressService.increaseProgress();
			} else {

				ProgressService.decreaseProgress();
			}
		};
	};

	app.component("dhTaskboard", {

		templateUrl: "components/taskboard/taskboard.html",
		bindings: { taskboardTitle: "@" },
		controller: ["TaskDataService", "ProgressService", TaskController]

	});
})(angular.module("main"));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFza2JvYXJkL3Rhc2tib2FyZC5jb21wb25lbnQuanMiXSwibmFtZXMiOlsiYXBwIiwiVGFza0NvbnRyb2xsZXIiLCJUYXNrRGF0YVNlcnZpY2UiLCJQcm9ncmVzc1NlcnZpY2UiLCJ0YXNrTGlzdCIsImdldFRhc2tzIiwic2hvd1Rhc2tzIiwiZmxpcFNob3dUYXNrcyIsImZsaXAiLCJ0YXNrSUQiLCJ0YXNrIiwiZmlsdGVyIiwidGFza0l0ZW0iLCJpZCIsImNvbXBsZXRlZCIsImluY3JlYXNlUHJvZ3Jlc3MiLCJkZWNyZWFzZVByb2dyZXNzIiwiY29tcG9uZW50IiwidGVtcGxhdGVVcmwiLCJiaW5kaW5ncyIsInRhc2tib2FyZFRpdGxlIiwiY29udHJvbGxlciIsImFuZ3VsYXIiLCJtb2R1bGUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVDLFdBQVVBLEdBQVYsRUFBZTs7QUFFZixLQUFNQyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQVVDLGVBQVYsRUFBMkJDLGVBQTNCLEVBQTRDOztBQUVsRSxPQUFLQyxRQUFMLEdBQWdCRixnQkFBZ0JHLFFBQWhCLEVBQWhCOztBQUVBLE9BQUtDLFNBQUwsR0FBaUIsS0FBakI7O0FBRUEsT0FBS0MsYUFBTCxHQUFxQixZQUFZOztBQUVoQyxRQUFLRCxTQUFMLEdBQWlCLENBQUMsS0FBS0EsU0FBdkI7QUFFQSxHQUpEOztBQU1BLE9BQUtFLElBQUwsR0FBWSxVQUFVQyxNQUFWLEVBQWtCOztBQUU3QixPQUFNQyxPQUFPLEtBQUtOLFFBQUwsQ0FBY08sTUFBZCxDQUFxQixVQUFDQyxRQUFEO0FBQUEsV0FBY0EsU0FBU0MsRUFBVCxLQUFnQkosTUFBOUI7QUFBQSxJQUFyQixFQUEyRCxDQUEzRCxDQUFiOztBQUVBQyxRQUFLSSxTQUFMLEdBQWlCLENBQUNKLEtBQUtJLFNBQXZCOztBQUVBLE9BQUlKLEtBQUtJLFNBQVQsRUFBb0I7O0FBRW5CWCxvQkFBZ0JZLGdCQUFoQjtBQUVBLElBSkQsTUFJTzs7QUFFTlosb0JBQWdCYSxnQkFBaEI7QUFFQTtBQUVELEdBaEJEO0FBa0JBLEVBOUJEOztBQWdDQWhCLEtBQUlpQixTQUFKLENBQWMsYUFBZCxFQUE2Qjs7QUFFNUJDLGVBQWEscUNBRmU7QUFHNUJDLFlBQVUsRUFBQ0MsZ0JBQWdCLEdBQWpCLEVBSGtCO0FBSTVCQyxjQUFZLENBQUMsaUJBQUQsRUFBb0IsaUJBQXBCLEVBQXVDcEIsY0FBdkM7O0FBSmdCLEVBQTdCO0FBUUEsQ0ExQ0EsRUEwQ0NxQixRQUFRQyxNQUFSLENBQWUsTUFBZixDQTFDRCxDQUFEIiwiZmlsZSI6ImNvbXBvbmVudHMvdGFza2JvYXJkL3Rhc2tib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuKGZ1bmN0aW9uIChhcHApIHtcblx0XG5cdGNvbnN0IFRhc2tDb250cm9sbGVyID0gZnVuY3Rpb24gKFRhc2tEYXRhU2VydmljZSwgUHJvZ3Jlc3NTZXJ2aWNlKSB7XG5cdFx0XG5cdFx0dGhpcy50YXNrTGlzdCA9IFRhc2tEYXRhU2VydmljZS5nZXRUYXNrcygpO1xuXHRcdFxuXHRcdHRoaXMuc2hvd1Rhc2tzID0gZmFsc2U7XG5cdFx0XG5cdFx0dGhpcy5mbGlwU2hvd1Rhc2tzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XG5cdFx0XHR0aGlzLnNob3dUYXNrcyA9ICF0aGlzLnNob3dUYXNrcztcblx0XHRcdFxuXHRcdH07XG5cdFx0XG5cdFx0dGhpcy5mbGlwID0gZnVuY3Rpb24gKHRhc2tJRCkge1xuXHRcdFx0XG5cdFx0XHRjb25zdCB0YXNrID0gdGhpcy50YXNrTGlzdC5maWx0ZXIoKHRhc2tJdGVtKSA9PiB0YXNrSXRlbS5pZCA9PT0gdGFza0lEKVswXTtcblx0XHRcdFxuXHRcdFx0dGFzay5jb21wbGV0ZWQgPSAhdGFzay5jb21wbGV0ZWQ7XG5cdFx0XHRcblx0XHRcdGlmICh0YXNrLmNvbXBsZXRlZCkge1xuXHRcdFx0XHRcblx0XHRcdFx0UHJvZ3Jlc3NTZXJ2aWNlLmluY3JlYXNlUHJvZ3Jlc3MoKTtcblx0XHRcdFx0XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcblx0XHRcdFx0UHJvZ3Jlc3NTZXJ2aWNlLmRlY3JlYXNlUHJvZ3Jlc3MoKTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9O1xuXHRcdFxuXHR9O1xuXHRcblx0YXBwLmNvbXBvbmVudChcImRoVGFza2JvYXJkXCIsIHtcblx0XHRcblx0XHR0ZW1wbGF0ZVVybDogXCJjb21wb25lbnRzL3Rhc2tib2FyZC90YXNrYm9hcmQuaHRtbFwiLFxuXHRcdGJpbmRpbmdzOiB7dGFza2JvYXJkVGl0bGU6IFwiQFwifSxcblx0XHRjb250cm9sbGVyOiBbXCJUYXNrRGF0YVNlcnZpY2VcIiwgXCJQcm9ncmVzc1NlcnZpY2VcIiwgVGFza0NvbnRyb2xsZXJdXG5cdFx0XG5cdH0pO1xuXHRcbn0oYW5ndWxhci5tb2R1bGUoXCJtYWluXCIpKSk7XG4iXX0=