
Creating a Python Flask Web Service for controlling different "Profiles" of a given Monitor set up:

* [x] Create Initial express app with single hello world endpoint
* [ ] Create POC for running bash command from a given endpoint call
* [x] Architect the API for monitor-ws
    * [x] Create the Data Model for a Profile
        * [x] Way to order monitors (1,2,3 isn't necessarilly in that order all the time)?
        * [x] Way to identify specific monitors? (serialNumber)
* [x] Implement GET endpoint for '/monitor' of monitor-ws
* [x] Implement ddcutil implementation for GET '/monitor' of monitor-ws for dev
* [x] Implement ddcutil implementation for GET '/monitor' of monitor-ws for prod
* [x] Implement PATCH endpoint for '/monitor' of monitor-ws
* [X] Implement ddcutil implementation for PATCH '/monitor' of monitor-ws for dev
* [x] Implement ddcutil implementation for PATCH '/monitor' of monitor-ws for prod
* [x] Create Initial express app with single hello world endpoint for monitor-controller
* [x] Implement POST endpoint for '/registrations' of monitor-controller-ws
    * [x] Can add monitor to repo
    * [x] Error if trying to add monitor already added
* [x] Implement GET endpoint for '/registrations' of monitor-controller-ws
* [x] Implement GET endpoint for '/registrations/:id' of monitor-controller-ws
* [x] Implement GET endpoint for '/monitors' of monitor-controller-ws
* [ ] Implement GET endpoint for '/monitors/:id' of monitor-controller-ws
* [ ] Implement underlying REST calls for GET '/monitors/:id' of monitor-controller-ws
* [ ] Implement PATCH endpoint for '/monitors' of monitor-controller-ws
* [ ] Implement underlying REST calls for PATCH '/monitors' of monitor-controller-ws
* [ ] Implement error handling middleware for monitor-ws
* [ ] Implement Polling from monitor-controller-ws to monitor-ws to see if online/available???
    * [ ] If not online remove from repo
* [ ] Implement ability to add status codes in Error class???
* [ ] Added Testing!!!
* [ ] Create frontend GUI **(OPTIONAL)** vs. MACRO Button...? 
