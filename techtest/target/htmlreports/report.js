$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "Verify if user is able to Login in to the site",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login as a authenticated user",
  "description": "",
  "id": "login-feature;login-as-a-authenticated-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user navigates to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and Password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "success message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Test.user_is_on_homepage()"
});
formatter.result({
  "duration": 15361556400,
  "status": "passed"
});
formatter.match({
  "location": "Test.user_navigates_to_Login_Page()"
});
formatter.result({
  "duration": 4735692497,
  "status": "passed"
});
formatter.match({
  "location": "Test.user_enters_username_and_Password()"
});
formatter.result({
  "duration": 6590133107,
  "status": "passed"
});
formatter.match({
  "location": "Test.success_message_is_displayed()"
});
formatter.result({
  "duration": 38720,
  "status": "passed"
});
});