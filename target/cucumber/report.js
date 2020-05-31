$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Walmart.feature");
formatter.feature({
  "name": "Login feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I navigate to walmart.com",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.StepDefsForWalmart.i_navigate_to_walmart_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefsForWalmart.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter userId and Password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.StepDefsForWalmart.i_enter_userId_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.StepDefsForWalmart.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the welcome message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.StepDefsForWalmart.i_should_see_the_welcome_message()"
});
formatter.result({
  "status": "passed"
});
});