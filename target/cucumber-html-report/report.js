$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("add_user/AddUser.feature");
formatter.feature({
  "line": 2,
  "name": "Add User - OrangeHRM",
  "description": "En tant que utilisateur je souhaite ajouter un user a ma liste admin",
  "id": "add-user---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@adduser"
    }
  ]
});
formatter.before({
  "duration": 7291012300,
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
formatter.step({
  "line": 10,
  "name": "Je clique sur le module Admin",
  "keyword": "And "
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeMeConnecteÀLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 2323082700,
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
  "duration": 647385200,
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
  "duration": 146652500,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeCliqueSurLeBouttonLogin()"
});
formatter.result({
  "duration": 2757428600,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.jeCliqueSurLeModuleAdmin()"
});
formatter.result({
  "duration": 1080869000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Je clique sur le module Admin - OrangeHRM",
  "description": "",
  "id": "add-user---orangehrm;je-clique-sur-le-module-admin---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@clickadmin"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Je clique sur le bouton Add",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Je choisi Admin dans de User Role",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Je saisi le nom de employee \"Alice Duval\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Je resaisi le nom de employe \"Zakou11\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Je saisi le Password \"Paris75000\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Je resaisi le Password \"Paris75000\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Je clique sur save",
  "keyword": "And "
});
formatter.match({
  "location": "AddUserStepDefinition.jeCliqueSurLeBoutonAdd()"
});
formatter.result({
  "duration": 630427900,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.jeChoisiAdminDansDeUserRole()"
});
formatter.result({
  "duration": 160837500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alice Duval",
      "offset": 29
    }
  ],
  "location": "AddUserStepDefinition.jeSaisiLeNomDeEmployee(String)"
});
formatter.result({
  "duration": 204520500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zakou11",
      "offset": 30
    }
  ],
  "location": "AddUserStepDefinition.jeResaisiLeNomDeEmploye(String)"
});
formatter.result({
  "duration": 142653400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paris75000",
      "offset": 22
    }
  ],
  "location": "AddUserStepDefinition.jeSaisiLePassword(String)"
});
formatter.result({
  "duration": 181712700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paris75000",
      "offset": 24
    }
  ],
  "location": "AddUserStepDefinition.jeResaisiLePassword(String)"
});
formatter.result({
  "duration": 138686800,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.jeCliqueSurSave()"
});
formatter.result({
  "duration": 99085900,
  "status": "passed"
});
formatter.after({
  "duration": 95900,
  "status": "passed"
});
formatter.before({
  "duration": 6451716000,
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
formatter.step({
  "line": 10,
  "name": "Je clique sur le module Admin",
  "keyword": "And "
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeMeConnecteÀLApplicationOrangeHRM()"
});
formatter.result({
  "duration": 1890236800,
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
  "duration": 221075100,
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
  "duration": 155704900,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeCliqueSurLeBouttonLogin()"
});
formatter.result({
  "duration": 1924397000,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.jeCliqueSurLeModuleAdmin()"
});
formatter.result({
  "duration": 1829744500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verification",
  "description": "",
  "id": "add-user---orangehrm;verification",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Je saisi le nom de employee a nouveau dans la case username pour la partie search \"Zakou11\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "je clique sur search afin de verfier le nom saisi",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Zakou11",
      "offset": 83
    }
  ],
  "location": "AddUserStepDefinition.jeSaisiLeNomDeEmployeeANouveauDansLaCaseUsernamePourLaPartieSearch(String)"
});
formatter.result({
  "duration": 143039500,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.jeCliqueSurSearchAfinDeVerfierLeNomSaisi()"
});
formatter.result({
  "duration": 650989200,
  "status": "passed"
});
formatter.after({
  "duration": 33800,
  "status": "passed"
});
});