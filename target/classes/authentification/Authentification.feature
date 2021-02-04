@connexion
Feature: Authentifications - OrangeHRM
  En tant que utilisateur je souhaite m'authentifier
  
  Background:
	Given Je me connecte à l'application OrangeHRM

  @cnx
  Scenario: Authentifications - OrangeHRM
    When Je saisi Username "Admin"
    And Je saisi Password "admin123"
    And Je clique sur le boutton Login 
    Then Redirection vers le compte admin "Welcome"
