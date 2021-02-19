@tagDragAndDrop
Feature: DragAndDrop - Demoqa
  En tant que utilisateur je souhaite Glisser Deposer un fichier

  @tagD
  Scenario: DragAndDrop - Demoqa
    Given Je me connecte a l application Demoqa
    When Glisser deposer  le fichier souhaite a l emplacement souhaite
    Then Verfier si le fichier a ete bien depose
