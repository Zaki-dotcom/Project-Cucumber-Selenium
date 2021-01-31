$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentification/Authentification.feature");
formatter.feature({
  "line": 2,
  "name": "Authentifications - OrangeHRM",
  "description": "En tant que utilisateur je souhaite m\u0027authentifier",
  "id": "authentifications---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@connexion"
    }
  ]
});
formatter.before({
  "duration": 6256594800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Authentifications - OrangeHRM",
  "description": "",
  "id": "authentifications---orangehrm;authentifications---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Je me connecte à l\u0027application OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Je saisi Username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Je saisi Password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Je clique sur le boutton Login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Redirection vers le compte admin",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeMeConnecteÀLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 278565700,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeSaisiUsername()"
});
formatter.result({
  "duration": 37700,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeSaisiPassword()"
});
formatter.result({
  "duration": 36500,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeCliqueSurLeBouttonLogin()"
});
formatter.result({
  "duration": 41300,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.redirectionVersLeCompteAdmin()"
});
formatter.result({
  "duration": 39500,
  "status": "passed"
});
formatter.after({
  "duration": 1385377600,
  "status": "passed"
});
});