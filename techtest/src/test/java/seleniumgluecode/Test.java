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
    @Given("^navigate to nsw service center url$")
    public void navigate_to_nsw_service_center() throws Throwable {     
    	System.setProperty("webdriver.chrome.driver","C:\\Users\\Damu\\chromedriver.exe");
    	driver=new ChromeDriver();
    	driver.manage().window().maximize();
//    	implicit wait
    	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    	driver.get("https://www.service.nsw.gov.au/");
    	
    }
    
    @When("^Search for Apply for a number plate$")
    public void search_for_apply_for_numberplate() throws Throwable {
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
    	String actualtitle=driver.getTitle();    	
    	String expectedtitle="Apply for a number plate | Service NSW";
    	//verify if the title is matched
    	if(actualtitle.equalsIgnoreCase(expectedtitle))
			System.out.println("Title Matched");    	
		else {
			System.out.println("Title didn't match");
		}
			
		}
    
    @When("^Click on Locate us button$")
    public void click_on_locate_button() throws Throwable {
    	//click on find locations    	
    	WebElement findlocationslink = driver.findElement(By.linkText("Find locations"));
    	findlocationslink.click();    	
    	
    }
    @When("^Enter suburb  ([^\"]*)$")
    public void enter_suburb_sydney(String suburb) throws Throwable {
    	//Enter Suburb
    	WebElement locatortext = driver.findElement(By.id("locatorTextSearch"));
    	locatortext.sendKeys(suburb);
    	locatortext.sendKeys(Keys.ENTER);    	 
    }    
    
    @Then("^Select the service center ([^\"]*)$")
    public void select_the_service_center(String servicecenter) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    	//click on  required service center    	
    	
    	WebDriverWait webdriverwait=new WebDriverWait(driver,10);
    	webdriverwait.until(ExpectedConditions.visibilityOfElementLocated(By.linkText(servicecenter)));
    	WebElement servicecenterelement = driver.findElement(By.linkText(servicecenter));
    	servicecenterelement.click(); 
    	driver.close();
    };
    
       
}