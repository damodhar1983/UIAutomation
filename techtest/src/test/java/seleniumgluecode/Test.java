package seleniumgluecode;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
//import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Test {
    public static WebDriver driver;
    @Given("^user is on homepage$")
    public void user_is_on_homepage() throws Throwable {     
    	System.setProperty("webdriver.chrome.driver","C:\\Users\\Damu\\chromedriver.exe");
    	driver=new ChromeDriver();
    	driver.manage().window().maximize();
//    	implicit wait
    	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    	driver.get("https://www.service.nsw.gov.au/");
    }
    
    @When("^user navigates to Login Page$")
    public void user_navigates_to_Login_Page() throws Throwable {
    	//Explicitwait
    	WebDriverWait webdriverwait=new WebDriverWait(driver,10);
    	webdriverwait.until(ExpectedConditions.visibilityOfElementLocated(By.name("q")));
    	WebElement textbox = driver.findElement(By.name("q"));
    	//Enter the required text
    	textbox.sendKeys("Apply for a number plate");
    	textbox.sendKeys(Keys.ENTER);
    	//click on the required link
    	WebElement numberplate = driver.findElement(By.linkText("Apply for a number plate"));
    	numberplate.click();
    }
    
    @When("^user enters username and Password$")
    public void user_enters_username_and_Password() throws Throwable {
    	//click on find locations    	
    	WebElement findlocationslink = driver.findElement(By.linkText("Find locations"));
    	findlocationslink.click();
    	
    	//Enter Suburb
    	WebElement locatortext = driver.findElement(By.id("locatorTextSearch"));
    	locatortext.sendKeys("Sydney 2000");
    	locatortext.sendKeys(Keys.ENTER);

    	//click on  required service center    	
    	WebElement servicecenter = driver.findElement(By.linkText("Marrickville Service Centre"));
    	servicecenter.click();  
    }
    
    @Then("^success message is displayed$")
    public void success_message_is_displayed() throws Throwable {
    	 
    }      
}