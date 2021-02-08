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
  "duration": 7497220100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Je me connecte à l\u0027application OrangeHRM",
  "keyword": "Given "
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeMeConnecteÀLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 2206853800,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Authentifications - OrangeHRM",
  "description": "",
  "id": "authentifications---orangehrm;authentifications---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Je saisi Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Je saisi Password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Je clique sur le boutton Login",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Redirection vers le compte admin \"Welcome\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "AuthentificationStepDefinition.jeSaisiUsername(String)"
});
formatter.result({
  "duration": 867570100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 19
    }
  ],
  "location": "AuthentificationStepDefinition.jeSaisiPassword(String)"
});
formatter.result({
  "duration": 142791800,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeCliqueSurLeBouttonLogin()"
});
formatter.result({
  "duration": 3010551600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome",
      "offset": 34
    }
  ],
  "location": "AuthentificationStepDefinition.redirectionVersLeCompteAdmin(String)"
});
formatter.result({
  "duration": 115307100,
  "status": "passed"
});
formatter.after({
  "duration": 1735976000,
  "status": "passed"
});
});