
Creating a Python Flask Web Service for controlling different "Profiles" of a given Monitor set up:

* [x] Create Initial express app with single hello world endpoint
* [ ] Create POC for running bash command from a given endpoint call
* [x] Architect the API for monitor-ws
    * [x] Create the Data Model for a Profile
        * [x] Way to order monitors (1,2,3 isn't necessarilly in that order all the time)?
        * [x] Way to identify specific monitors? (serialNumber)
* [x] Implement GET endpoint for '/monitor' of monitor-ws
* [x] Implement ddcutil implementation for GET '/monitor' of monitor-ws for dev
* [ ] Implement ddcutil implementation for GET '/monitor' of monitor-ws for prod
* [ ] Implement PATCH endpoint for '/monitor' of monitor-ws
* [ ] Implement ddcutil implementation for PATCH '/monitor' of monitor-ws for dev
* [ ] Implement ddcutil implementation for PATCH '/monitor' of monitor-ws for prod
* [ ] Create Initial express app with single hello world endpoint for monitor-controller
* [ ] Implement GET endpoint for '/monitors' of monitor-controller-ws
* [ ] Implement underlying REST calls for GET '/monitors' of monitor-controller-ws
* [ ] Implement GET endpoint for '/monitors/:id' of monitor-controller-ws
* [ ] Implement underlying REST calls for GET '/monitors/:id' of monitor-controller-ws
* [ ] Implement PATCH endpoint for '/monitors' of monitor-controller-ws
* [ ] Implement underlying REST calls for PATCH '/monitors' of monitor-controller-ws
* [ ] Registration of monitor ws to monitor controller ws???
* [ ] Create frontend GUI **(OPTIONAL)** vs. MACRO Button...? 
