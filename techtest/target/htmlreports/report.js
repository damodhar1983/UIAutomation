$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "Verify if user is able to Login in to the site",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "search service center",
  "description": "",
  "id": "login-feature;search-service-center",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "navigate to nsw service center url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Search for Apply for a number plate",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Locate us button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter suburb Sydney 2000",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select the service center \u003cservicecenter\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-feature;search-service-center;",
  "rows": [
    {
      "cells": [
        "servicecenter"
      ],
      "line": 13,
      "id": "login-feature;search-service-center;;1"
    },
    {
      "cells": [
        "Marrickville Service Centre"
      ],
      "line": 14,
      "id": "login-feature;search-service-center;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "search service center",
  "description": "",
  "id": "login-feature;search-service-center;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "navigate to nsw service center url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Search for Apply for a number plate",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Locate us button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter suburb Sydney 2000",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select the service center Marrickville Service Centre",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Test.navigate_to_nsw_service_center()"
});
formatter.result({
  "duration": 7934988732,
  "status": "passed"
});
formatter.match({
  "location": "Test.search_for_apply_for_numberplate()"
});
formatter.result({
  "duration": 5280315057,
  "status": "passed"
});
formatter.match({
  "location": "Test.click_on_locate_button()"
});
formatter.result({
  "duration": 3240576074,
  "status": "passed"
});
formatter.match({
  "location": "Test.enter_suburb_sydney()"
});
formatter.result({
  "duration": 445910246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marrickville Service Centr",
      "offset": 26
    }
  ],
  "location": "Test.select_the_service_center(String)"
});
formatter.result({
  "duration": 3919791026,
  "status": "passed"
});
});