# Can of Books Backend

**Author**: Jonathan Tsai, Daniel Yoon

**Version**: 1.2.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
People want to keep track of their books and which ones are checked-out of the system, so we create a server that interfaces
with MongoDB to manage the data of books.

## Getting Started
* Ensure that you have node.js, npm, and nodemon installed.
* Use npm install to install dependencies.
* Setup a MongoDB Atlas cluster.
* Add a .env file into your root folder with an environment variable pointing to your MongoDB cluster.
* Run node seed.js to populate your database with test data.
* Run the server on nodemon and make calls to the server through localhost or an online server host.

## Architecture
This server stores data in MongoDB Atlas, using Mongoose to create schemas and data models for the document entries. We use Express.js to handle API calls to our server.

## Change Log
03-13-2023 2:00pm Setup schema and model for MongoDB database entries. Populate test data.
03-13-2023 3:00pm Create route for /books that handles GET request for book data.

## Estimates
<!-- See below -->
Feature: Repo setup\
Estimated time to complete: 30 min\
Start Time: 12:30 PM\
End Time: 1 PM\
Actual: 12:45 PM

Feature: Seeding and Querying MongoDB\
Estimated time to complete: 1 hour\
Start Time: 12:45 PM\
End Time: 1:45 PM\
Actual: 2:30PM

Feature: Rendering Front End\
Estimated time to complete: 2 hour\
Start Time: 2:30 PM\
End Time: 4:30 PM\
Actual: 4 PM

## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

**Logistical**
* What hours will you be available to communicate?
    * Whatever is reasonable, sleep hours off the table (11pm onward).
* What platform will you use to communicate (ie. Slack, phone …)?
    * Slack
* How often will you take breaks?
    *  As needed.
* What is your plan if you start to fall behind?
    * Coordinate with other person to see what can be supplmemented.

**Cooperative**
* Make a list of each parson’s strengths.
    * Daniel: front-end
    * Jon: backend

* How can you best utilize these strengths in the development of your application?
    * We're implementing our weakness in the lab, and we'll consult each other if struggling.

* In what areas do you each want to develop greater strength?
    * Daniel: Handling errors
    * Jon: Undersanding css at a deep fundamental level.

* Knowing that every person in your team needs to understand the code, how do you plan to approach the day-to-day development?
    * Standup, delegate, check-ins at milestones. Daily.

**Conflict Resolution**

* What will your team do if one person is pulling all the weight while the other person is not contributing?
    * Call it out, and discuss.

* What will your team do if one person is taking over the project and not letting the other member contribute?
    * Call it out, and discuss.

* How will you approach each other and the challenge of building an application knowing that it is impossible for two people to be at the exact same place in understanding and skill level?
    * Walking through the code in question to understand what is going on.