package com.orangeHRM.e2eTests.add_user.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AddUserPage {
	
	
	/* Locators */
	final static String ADMIN_ID = "menu_admin_viewAdminModule";
	final static String ADD_ADMIN_ID = "btnAdd";
	final static String USER_ROLE_ID = "systemUser_userType";
	final static String NAME_EMPLOYEE_ID = "systemUser_employeeName_empName";
	final static String USER_NAME_ID = "systemUser_userName";
	final static String PASSWORD_ID = "systemUser_password";
	final static String CONFIRM_PASSWORD_ID = "systemUser_confirmPassword";
	final static String BUTTON_SAVE_ID = "btnSave";
	final static String SEARCH_USER_ID = "searchSystemUser_userName";
	final static String BUTTON_SEARCH_ID = "searchBtn";
	
	
	/* FindBy */
	@FindBy(how = How.ID, using = ADMIN_ID)
	public static WebElement admin_module;
	@FindBy(how = How.ID, using = ADD_ADMIN_ID)
	public static WebElement add_admin;
	@FindBy(how = How.ID, using = USER_ROLE_ID)
	public static WebElement user_role_admin;
	@FindBy(how = How.ID, using = NAME_EMPLOYEE_ID)
	public static WebElement name_employee;
	@FindBy(how = How.ID, using = USER_NAME_ID)
	public static WebElement user_name;
	@FindBy(how = How.ID, using = PASSWORD_ID)
	public static WebElement password;
	@FindBy(how = How.ID, using = CONFIRM_PASSWORD_ID)
	public static WebElement confirm_password;
	@FindBy(how = How.ID, using = BUTTON_SAVE_ID)
	public static WebElement button_save;
	@FindBy(how = How.ID, using = BUTTON_SEARCH_ID)
	public static WebElement button_search;
	@FindBy(how = How.ID, using = SEARCH_USER_ID)
	public static WebElement saisirSearchUser;
	
	
	
	
	/* Methods */


	}
	
	
	
