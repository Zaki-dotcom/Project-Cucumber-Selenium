$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("background/Background.feature");
formatter.feature({
  "line": 2,
  "name": "Background - OrangeHRM",
  "description": "ETQ utilisateur je souhaite verifier le fonctionnement du Background",
  "id": "background---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@background"
    }
  ]
});
formatter.before({
  "duration": 7172129800,
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
formatter.step({
  "line": 7,
  "name": "Je saisi Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisi Password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur le boutton Login",
  "keyword": "And "
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeMeConnecteÀLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 2377238000,
  "status": "passed"
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
  "duration": 314596100,
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
  "duration": 215278200,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeCliqueSurLeBouttonLogin()"
});
formatter.result({
  "duration": 2967455300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Authentification - OrangeHRM",
  "description": "",
  "id": "background---orangehrm;authentification---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Redirection vers le compte admin \"Welcome\"",
  "keyword": "Then "
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
  "duration": 112260400,
  "status": "passed"
});
formatter.after({
  "duration": 1213475100,
  "status": "passed"
});
formatter.before({
  "duration": 5474325400,
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
formatter.step({
  "line": 7,
  "name": "Je saisi Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisi Password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur le boutton Login",
  "keyword": "And "
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeMeConnecteÀLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 2089420400,
  "status": "passed"
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
  "duration": 195673600,
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
  "duration": 216690600,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeCliqueSurLeBouttonLogin()"
});
formatter.result({
  "duration": 2838574900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Cliquer sur le module BUZZ",
  "description": "",
  "id": "background---orangehrm;cliquer-sur-le-module-buzz",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@buzz"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Je clique sur le module BUZZ",
  "keyword": "When "
});
formatter.match({
  "location": "BackgroundStepDefinition.jeCliqueSurLeModuleBUZZ()"
});
formatter.result({
  "duration": 3040003400,
  "status": "passed"
});
formatter.after({
  "duration": 959231500,
  "status": "passed"
});
formatter.before({
  "duration": 5551214100,
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
formatter.step({
  "line": 7,
  "name": "Je saisi Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisi Password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur le boutton Login",
  "keyword": "And "
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeMeConnecteÀLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 2208125400,
  "status": "passed"
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
  "duration": 204442000,
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
  "duration": 176731000,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeCliqueSurLeBouttonLogin()"
});
formatter.result({
  "duration": 2860849700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Cliquer sur le module Recruitment",
  "description": "",
  "id": "background---orangehrm;cliquer-sur-le-module-recruitment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@rec"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Je clique sur le module Recruitment",
  "keyword": "When "
});
formatter.match({
  "location": "BackgroundStepDefinition.jeCliqueSurLeModuleRecruitment()"
});
formatter.result({
  "duration": 1465939200,
  "status": "passed"
});
formatter.after({
  "duration": 1114197500,
  "status": "passed"
});
});