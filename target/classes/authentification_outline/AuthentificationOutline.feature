@outline
Feature: Authentifications Outline - OrangeHRM
  En tant que utilisateur je souhaite m'authentifier avec un scenario outline

	Background: 
	Given Je me connecte à l'application OrangeHRM
	
  @cnx-outline
  Scenario Outline: Authentifications Outline - OrangeHRM
    When je saisi Username "<name>"
    And je saisi Password "<password>"
    And Je clique sur le boutton Login

    Examples: 
      | name   | password   |
      | Admin  | admin123   |
      | Safe   | safe123    |
      | Imen   | safe123    |
      | Sondes | sondes123  |
      | Hanene | hanene123  |
      | Zakaia | zakaria123 |
