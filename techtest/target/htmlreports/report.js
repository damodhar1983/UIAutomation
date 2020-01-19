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
  "name": "Enter suburb  \u003csuburb\u003e",
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
        "suburb",
        "servicecenter"
      ],
      "line": 13,
      "id": "login-feature;search-service-center;;1"
    },
    {
      "cells": [
        "Sydney 2000",
        "Marrickville Service Centre"
      ],
      "line": 14,
      "id": "login-feature;search-service-center;;2"
    },
    {
      "cells": [
        "Sydney Domestic Airport 2020",
        "Rockdale Service Centre"
      ],
      "line": 15,
      "id": "login-feature;search-service-center;;3"
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
  "name": "Enter suburb  Sydney 2000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select the service center Marrickville Service Centre",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Test.navigate_to_nsw_service_center()"
});
formatter.result({
  "duration": 7947038014,
  "status": "passed"
});
formatter.match({
  "location": "Test.search_for_apply_for_numberplate()"
});
formatter.result({
  "duration": 5572975626,
  "status": "passed"
});
formatter.match({
  "location": "Test.click_on_locate_button()"
});
formatter.result({
  "duration": 2188005951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney 2000",
      "offset": 14
    }
  ],
  "location": "Test.enter_suburb_sydney(String)"
});
formatter.result({
  "duration": 1373803014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marrickville Service Centre",
      "offset": 26
    }
  ],
  "location": "Test.select_the_service_center(String)"
});
formatter.result({
  "duration": 4641048547,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "search service center",
  "description": "",
  "id": "login-feature;search-service-center;;3",
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
  "name": "Enter suburb  Sydney Domestic Airport 2020",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select the service center Rockdale Service Centre",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Test.navigate_to_nsw_service_center()"
});
formatter.result({
  "duration": 6694597392,
  "status": "passed"
});
formatter.match({
  "location": "Test.search_for_apply_for_numberplate()"
});
formatter.result({
  "duration": 4920176823,
  "status": "passed"
});
formatter.match({
  "location": "Test.click_on_locate_button()"
});
formatter.result({
  "duration": 3366360439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney Domestic Airport 2020",
      "offset": 14
    }
  ],
  "location": "Test.enter_suburb_sydney(String)"
});
formatter.result({
  "duration": 1519521947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rockdale Service Centre",
      "offset": 26
    }
  ],
  "location": "Test.select_the_service_center(String)"
});
formatter.result({
  "duration": 5231711134,
  "status": "passed"
});
});