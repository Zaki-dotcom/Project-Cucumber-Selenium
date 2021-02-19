package com.orangeHRM.e2eTests.drag_and_drop.stepDefinitions;

import org.openqa.selenium.WebDriver;

import com.orangeHRM.e2eTests.drag_and_drop.pages.DragAndDropPage;
import com.orangeHRM.e2eTests.utils.CommonMethods;
import com.orangeHRM.e2eTests.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DragAndDropStepDefinition extends CommonMethods {
	
	public WebDriver driver;
	private DragAndDropPage dragAndDropPage = new DragAndDropPage();
	private CommonMethods commonMethods = new CommonMethods ();
	
	public DragAndDropStepDefinition() {
		driver = Setup.driver;
	}

	@Given("^Je me connecte a l application Demoqa$")
		public void je_me_connecte_a_l_application_Demoqa() throws Throwable {
		commonMethods.openApplicationWithConfigFile("url_drag_and_drop");
		}

	@When("^Glisser deposer  le fichier souhaite a l emplacement souhaite$")
	public void glisser_deposer_le_fichier_souhaite_a_l_emplacement_souhaite() throws Throwable {
		dragAndDropPage.dragAndDrop1();
	}

	@Then("^Verfier si le fichier a ete bien depose$")
	public void verfier_si_le_fichier_a_ete_bien_depose() throws Throwable {
		
	}

}
