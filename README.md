# taskr: Code Challenge

## Set up:

After cloning the project, please run the following:

If you have `yarn` installed:

Note: This requires `yarn v0.16` or higher.

`yarn start`

If you prefer to use `npm`, please modify the `package.json` file `script` property:

From:

`"start": "yarn && bower install && gulp"`

to:

`"start": "npm install && bower install && gulp"`

and then run:

`npm start`

`start` is a script that will install the node and bower packages as well as start the Gulp automatic build workflow. Gulp will be running continuously in the background until you decide to stop it (CTRL + C in the Mac). A browser tab/window will open to display the application. Every time that you make a change to a non-library, non-node-module .css, .html, .js or image file, the browser will reload and display the changes automatically.

**Note** While images are being processed and placed in the `dist` folder, the application will show broken links or absent images. Please wait for the image processing to be done to interact with the application. A message stating `Images have been processed` will display in green in the Terminal.

## App Requirements

### Core Goal
Create a Single Page Application in which the homepage lists a set of Tasks the User has to complete for the day.

### Specs

* Use AngularJS
* Create a Service that has a total of 10 Tasks a User could do.
    * When the User goes to the homepage of the app, 6 tasks are randomly chosen and assigned to the User.
* Create a Directive that utilizes https://github.com/kottenator/jquery-circle-progress and shows the number of items remaining in the circle as a percent complete.
    * The Directive should allow for optional parameters to be passed in to change default settings, such as size or color.
* The User should be able to click on a Task to mark it complete and the arc of the circle increases proportionately.
* Freestyle UI design.


### Evaluation Criteria

* Quality of JavaScript and AngularJS code.
    * Production quality.
    * Maintainable.
        * Follow Clean Code best practices.
* Application organization.
* Project structure.
* Satisfied requirements.
* Operability and presence of defects.
* Quality of user experience.

### Data

* Can make the tasks up.

### User Experience (Evolving)

* User is presented with six random Tasks that are chosen from a set of ten.
* User should be able to mark a Task as complete.
* User should be able to see a circle that represents the Progress made on completed the assigned Tasks.


### Components

* Task Board
* Task
* Progress Disk
