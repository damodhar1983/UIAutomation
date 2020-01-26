$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("servicecenterlocation.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "Verify if user is able to Login in to the site",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "search service center",
  "description": "",
  "id": "login-feature;search-service-center",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "navigate to nsw service center \u003cURL\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for Apply for a number plate",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on Locate us button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter suburb  \u003csuburb\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select the service center \u003cservicecenter\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-feature;search-service-center;",
  "rows": [
    {
      "cells": [
        "URL",
        "suburb",
        "servicecenter"
      ],
      "line": 12,
      "id": "login-feature;search-service-center;;1"
    },
    {
      "cells": [
        "\"https://www.service.nsw.gov.au/\"",
        "Sydney 2000",
        "Marrickville Service Centre"
      ],
      "line": 13,
      "id": "login-feature;search-service-center;;2"
    },
    {
      "cells": [
        "\"https://www.service.nsw.gov.au/\"",
        "Sydney Domestic Airport 2020",
        "Rockdale Service Centre"
      ],
      "line": 14,
      "id": "login-feature;search-service-center;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "search service center",
  "description": "",
  "id": "login-feature;search-service-center;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "navigate to nsw service center \"https://www.service.nsw.gov.au/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for Apply for a number plate",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on Locate us button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter suburb  Sydney 2000",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select the service center Marrickville Service Centre",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.service.nsw.gov.au/",
      "offset": 32
    }
  ],
  "location": "Test.navigate_to_nsw_service_center(String)"
});
formatter.result({
  "duration": 7752117901,
  "status": "passed"
});
formatter.match({
  "location": "Test.search_for_apply_for_numberplate()"
});
formatter.result({
  "duration": 3273973331,
  "status": "passed"
});
formatter.match({
  "location": "Test.click_on_locate_button()"
});
formatter.result({
  "duration": 2382382797,
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
  "duration": 579147447,
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
  "duration": 5849009065,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "search service center",
  "description": "",
  "id": "login-feature;search-service-center;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "navigate to nsw service center \"https://www.service.nsw.gov.au/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for Apply for a number plate",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on Locate us button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter suburb  Sydney Domestic Airport 2020",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select the service center Rockdale Service Centre",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.service.nsw.gov.au/",
      "offset": 32
    }
  ],
  "location": "Test.navigate_to_nsw_service_center(String)"
});
formatter.result({
  "duration": 6576952107,
  "status": "passed"
});
formatter.match({
  "location": "Test.search_for_apply_for_numberplate()"
});
formatter.result({
  "duration": 5289549699,
  "status": "passed"
});
formatter.match({
  "location": "Test.click_on_locate_button()"
});
formatter.result({
  "duration": 1184874549,
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
  "duration": 1632345011,
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
  "duration": 3679083910,
  "status": "passed"
});
});