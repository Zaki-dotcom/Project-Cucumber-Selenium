@adduser
Feature: Add User - OrangeHRM
  En tant que utilisateur je souhaite ajouter un user a ma liste admin

  Background: 
    Given Je me connecte à l'application OrangeHRM
    When Je saisi Username "Admin"
    And Je saisi Password "admin123"
    And Je clique sur le boutton Login
    And Je clique sur le module Admin

  @clickadmin
  Scenario: Je clique sur le module Admin - OrangeHRM
    And Je clique sur le bouton Add
    And Je choisi Admin dans de User Role
    And Je saisi le nom de employee "Alice Duval"
    And Je resaisi le nom de employe "Zakou11"
    And Je saisi le Password "Paris75000"
    And Je resaisi le Password "Paris75000"
    And Je clique sur save

  @search
  Scenario: Verification
    And Je saisi le nom de employee a nouveau dans la case username pour la partie search "Zakou11"
    And je clique sur search afin de verfier le nom saisi
