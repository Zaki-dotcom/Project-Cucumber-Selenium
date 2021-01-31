@connexion
Feature: Authentifications - OrangeHRM
  En tant que utilisateur je souhaite m'authentifier

  @cnx
  Scenario: Authentifications - OrangeHRM
    Given Je me connecte à l'application OrangeHRM
    When Je saisi Username
    And Je saisi Password
    And Je clique sur le boutton Login
    Then Redirection vers le compte admin
