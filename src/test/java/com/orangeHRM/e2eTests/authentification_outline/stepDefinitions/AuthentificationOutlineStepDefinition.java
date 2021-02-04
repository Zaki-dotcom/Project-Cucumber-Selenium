package com.orangeHRM.e2eTests.authentification_outline.stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.orangeHRM.e2eTests.authentification.pages.AuthentificationPage;
import com.orangeHRM.e2eTests.utils.CommonMethods;
import com.orangeHRM.e2eTests.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class AuthentificationOutlineStepDefinition {

	public WebDriver driver;
	private AuthentificationPage authentificationPage = new AuthentificationPage();
	private CommonMethods commonMethods = new CommonMethods();

	public AuthentificationOutlineStepDefinition() {
		driver = Setup.driver;
	}

//	@Given("^je me connecte à l'application OrangeHRM$")
//	public void jeMeConnecteÀLApplicationOrangeHRM() throws Throwable {
//		commonMethods.openApplicationWithConfigFile("url");
//	}

	@When("^je saisi Username \"([^\"]*)\"$")
	public void jeSaisiUsername(String name) throws Throwable {
		PageFactory.initElements(driver, AuthentificationPage.class);
		authentificationPage.fillUserName(name);
	}

	@When("^je saisi Password \"([^\"]*)\"$")
	public void jeSaisiPassword(String password) throws Throwable {
		authentificationPage.fillPassword(password);
	}

//	@When("^je clique sur le boutton Login$")
//	public void jeCliqueSurLeBouttonLogin() throws Throwable {
//		authentificationPage.clickLoginBoutton();
//
//	}
}
