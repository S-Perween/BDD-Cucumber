package steps;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.it.Date;

import static org.junit.Assert.assertEquals;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;


public class stepdefinitionfile {
	
public static  WebDriver driver;

public void getScreenshot() throws IOException
{
       // Date currentdate= new Date();
 
 //String screenshotfilename=currentdate.toString().replace(" ","-").replace(":","-");
 
 File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
  FileUtils.copyFile(screenshot, new File("C:\\Screenshot\\homePageScreenshot.png"));
 //FileUtils.copyFile(screenshotFile,new File(".//screenshot//"+screenshotfilename + ".png"));
}
 @Given("I am on whatfix page")
 public void I_am_on_whatfix_page(){
	 driver=new ChromeDriver();
	 driver.manage().window().maximize();
	 driver.get("https://whatfix.com/");
	 }
 
 
 @When("I verify website is opened")
 public void i_verify_website_is_opened() {
	 String expectedTitle="Whatfix | Drive Digital Adoption";
	 String actualTitle=driver.getTitle();
	 System.out.println(actualTitle);
	 Assert.assertEquals(expectedTitle, actualTitle);
	 System.out.println("Website is opened and verified");
 }
 
 @When("I click on customer link and verify")
 public void i_click_on_customer_link_and_verify() throws InterruptedException {
	Thread.sleep(2000);
	String expectedTitle="Customers";
    WebElement customers=driver.findElement(By.xpath("//a[contains(text(),'Customers')]"));
    System.out.println(customers.getText());
    Assert.assertEquals(customers.getText(),expectedTitle);
    customers.click();
 }

 @When("Click on Pricing and verify")
 public void click_on_Pricing_and_verify() throws InterruptedException {
	 
	 Thread.sleep(2000);
	    WebElement pricing=driver.findElement(By.xpath("//*[@class=\"primary-nav-wrap\"]/descendant::li[@class=\"menu-item menu-item-type-custom menu-item-object-custom menu-item-6221\"]/child::a[1]"));
	    Assert.assertFalse("pricing assert failed",false);
	    pricing.click(); 
 }
 @When("Click on Resources and verify")
 public void click_on_Resources_and_verify() throws InterruptedException {
	 Thread.sleep(2000);
	    WebElement resources=driver.findElement(By.xpath("//li[contains(@class,\"ink has-submenu-width--multi_column_medium\")]"));
	    Assert.assertSame(resources.isDisplayed(),true);
	    
	    resources.click();
 }

 @When("Click on Partners and verify")
 public void click_on_Partners_and_verify() throws InterruptedException {
	 Thread.sleep(2000);
	    WebElement partners=driver.findElement(By.xpath("//li[contains(@class,\"ink has-submenu-width--single_column\")]"));
	    Assert.assertSame(true,partners.isDisplayed());
	    partners.click();
	    Thread.sleep(1500);
	    driver.close();
 }



}



