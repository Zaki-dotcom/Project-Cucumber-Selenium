package com.orangeHRM.e2eTests.drag_and_drop.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import com.orangeHRM.e2eTests.utils.Setup;

public class DragAndDropPage {
	
	WebDriver driver;
	
	public DragAndDropPage() {
		driver = Setup.driver;
	}

	/* Locators */
	final static String DRAG_ME_ID = "draggable";
	final static String DROP_HERE_ID = "droppable";

	/* FindBy */
	@FindBy(how = How.ID, using = DRAG_ME_ID)
	public static WebElement dragMe;
	@FindBy(how = How.ID, using = DROP_HERE_ID)
	public static WebElement dropHere;

	
	/* Methods */
	public void dragAndDrop1() {
		Actions actions = new Actions(driver);
		actions.dragAndDrop(dragMe, dropHere).perform();
	}

	public void verify () {
		
}}
