package com.orangeHRM.e2eTests.add_user.stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import com.orangeHRM.e2eTests.add_user.pages.AddUserPage;
import com.orangeHRM.e2eTests.utils.CommonMethods;
import com.orangeHRM.e2eTests.utils.Setup;
import cucumber.api.java.en.When;

public class AddUserStepDefinition {
	
	public WebDriver driver;
	private AddUserPage addUserPage = new AddUserPage();
	private CommonMethods commonMethods = new CommonMethods();
	
	public AddUserStepDefinition() {
		driver = Setup.driver;
		PageFactory.initElements(driver, AddUserPage.class);
	}

	
	
	@When("^Je clique sur le module Admin$")
	public void jeCliqueSurLeModuleAdmin() throws Throwable {
		commonMethods.clickElement(AddUserPage.admin_module);
	}
	
	@When("^Je clique sur le bouton Add$")
	public void jeCliqueSurLeBoutonAdd() throws Throwable {
		commonMethods.clickElement(AddUserPage.add_admin);
	}
	
	@When("^Je choisi Admin dans de User Role$")
	public void jeChoisiAdminDansDeUserRole() throws Throwable {
		PageFactory.initElements(driver, AddUserPage.class);
		commonMethods.selectDropDownListByVisibleText(AddUserPage.user_role_admin, "Admin");    
	}
	
	@When("^Je saisi le nom de employee \"([^\"]*)\"$")
	public void jeSaisiLeNomDeEmployee(String name) throws Throwable {
		commonMethods.saisir(AddUserPage.name_employee, name);
	}
	
	@When("^Je resaisi le nom de employe \"([^\"]*)\"$")
	public void jeResaisiLeNomDeEmploye(String name) throws Throwable {
		commonMethods.saisir(AddUserPage.user_name, name);
	}
	
	@When("^Je saisi le Password \"([^\"]*)\"$")
	public void jeSaisiLePassword(String password) throws Throwable {
	  commonMethods.saisir(AddUserPage.password, password);
	}

	@When("^Je resaisi le Password \"([^\"]*)\"$")
	public void jeResaisiLePassword(String password) throws Throwable {
		commonMethods.saisir(AddUserPage.confirm_password, password);
	}

	@When("^Je clique sur save$")
	public void jeCliqueSurSave() throws Throwable {
		commonMethods.clickElement(AddUserPage.button_save);
	    
	}
	
	@When("^Je saisi le nom de employee a nouveau dans la case username pour la partie search \"([^\"]*)\"$")
	public void jeSaisiLeNomDeEmployeeANouveauDansLaCaseUsernamePourLaPartieSearch(String search) throws Throwable {
		commonMethods.saisir(AddUserPage.saisirSearchUser, search);
	}
	
	@When("^je clique sur search afin de verfier le nom saisi$")
	public void jeCliqueSurSearchAfinDeVerfierLeNomSaisi() throws Throwable {
		commonMethods.clickElement(AddUserPage.button_search);
	}
	
}
