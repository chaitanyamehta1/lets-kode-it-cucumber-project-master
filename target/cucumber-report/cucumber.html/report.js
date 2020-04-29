$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/learn/letskodeit/resources/featurefile/practiceandlogin.feature");
formatter.feature({
  "line": 1,
  "name": "Practice and Login Page Functionality",
  "description": "As a\nUser I want to visit lets kode it website",
  "id": "practice-and-login-page-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7692997278,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to practice page",
  "description": "",
  "id": "practice-and-login-page-functionality;verify-user-should-navigate-to-practice-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on practice element",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be in practice page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticeElement.iAmOnHomePage()"
});
formatter.result({
  "duration": 105352392,
  "status": "passed"
});
formatter.match({
  "location": "PracticeElement.iClickOnPracticeElement()"
});
formatter.result({
  "duration": 146499460,
  "status": "passed"
});
formatter.match({
  "location": "PracticeElement.iShouldBeInPracticePageSuccessfully()"
});
formatter.result({
  "duration": 1136162645,
  "status": "passed"
});
formatter.after({
  "duration": 81634,
  "status": "passed"
});
formatter.before({
  "duration": 6791024718,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify user should navigate to login page",
  "description": "",
  "id": "practice-and-login-page-functionality;verify-user-should-navigate-to-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login element",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should be in login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticeElement.iAmOnHomePage()"
});
formatter.result({
  "duration": 18460,
  "status": "passed"
});
formatter.match({
  "location": "PracticeElement.iClickOnLoginElement()"
});
formatter.result({
  "duration": 94826875,
  "status": "passed"
});
formatter.match({
  "location": "PracticeElement.iShouldBeInLoginPageSuccessfully()"
});
formatter.result({
  "duration": 3957372026,
  "status": "passed"
});
formatter.after({
  "duration": 40201,
  "status": "passed"
});
formatter.uri("src/test/java/com/learn/letskodeit/resources/featurefile/signupandhomepage.feature");
formatter.feature({
  "line": 1,
  "name": "Sign up page and Home page functionality",
  "description": "As a User\nI want to visit lets kode it website",
  "id": "sign-up-page-and-home-page-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7072588245,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to Sign up page",
  "description": "",
  "id": "sign-up-page-and-home-page-functionality;verify-user-should-navigate-to-sign-up-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Sign Up button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be on Sign Up page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticeElement.iAmOnHomePage()"
});
formatter.result({
  "duration": 20511,
  "status": "passed"
});
formatter.match({
  "location": "SignUpElement.iClickOnSignUpButton()"
});
formatter.result({
  "duration": 167166524,
  "status": "passed"
});
formatter.match({
  "location": "SignUpElement.iShouldBeOnSignUpPageSuccessfully()"
});
formatter.result({
  "duration": 4031247962,
  "status": "passed"
});
formatter.after({
  "duration": 26255,
  "status": "passed"
});
formatter.before({
  "duration": 6960573821,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify user should navigate to Home page",
  "description": "",
  "id": "sign-up-page-and-home-page-functionality;verify-user-should-navigate-to-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on Sign Up page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Lets kode it Logo",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should be on Home Page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUpElement.iAmOnSignUpPage()"
});
formatter.result({
  "duration": 22152,
  "status": "passed"
});
formatter.match({
  "location": "SignUpElement.iClickOnLetsKodeItLogo()"
});
formatter.result({
  "duration": 192542135,
  "status": "passed"
});
formatter.match({
  "location": "SignUpElement.iShouldBeOnHomePageSuccessfully()"
});
formatter.result({
  "duration": 59114450,
  "status": "passed"
});
formatter.after({
  "duration": 29946,
  "status": "passed"
});
});