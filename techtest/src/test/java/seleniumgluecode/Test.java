package seleniumgluecode;


import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
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
    
    
    @Given("^navigate to nsw service center \"([^\"]*)\"$")
    public void navigate_to_nsw_service_center(String URL) throws Throwable {     
    	System.setProperty("webdriver.chrome.driver",".\\chromedriver.exe");
    	driver=new ChromeDriver();
    	driver.manage().window().maximize();
//    	implicit wait
    	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    	driver.get(URL);
    	
    }
    
    @When("^Search for Apply for a number plate$")
    public void search_for_apply_for_numberplate() throws Throwable {
    	//Explicitwait
    	WebDriverWait webdriverwait=new WebDriverWait(driver,10);
    	webdriverwait.until(ExpectedConditions.visibilityOfElementLocated(By.name("q")));
    	WebElement searchtextbox = driver.findElement(By.name("q"));
    	//Enter the required text
    	searchtextbox.sendKeys("Apply for a number plate");
    	searchtextbox.sendKeys(Keys.ENTER);
    	//click on the required link
    	WebElement numberplate = driver.findElement(By.linkText("Apply for a number plate"));
    	numberplate.click();
    	String actualtitle=driver.getTitle();    	
    	String expectedtitle="Apply for a number plate | Service NSW";
    	//verify if the title is matched
    	if(actualtitle.equalsIgnoreCase(expectedtitle)) {
    		System.out.println("Title is Matched \n  " );
    		System.out.println(" Expected Title is : "+ expectedtitle + " \n The Actual Title is : "+ actualtitle );
    	}			  
    	
		else {
			System.out.println("Title didn't match \n ");
			System.out.println(" Expected Title is : "+ expectedtitle + "\n The Actual Title is : "+ actualtitle );
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
    	//scroll down to view the elements on the page where we are entering the search text
    	JavascriptExecutor js = (JavascriptExecutor) driver;
    	js.executeScript("window.scrollBy(0,500)");
    	
    	//Enter Suburb
    	WebElement locatortext = driver.findElement(By.id("locatorTextSearch"));
    	locatortext.sendKeys(suburb);
    	locatortext.sendKeys(Keys.ENTER);    	 
    }    
    
    @Then("^Select the service center ([^\"]*)$")
    public void select_the_service_center(String servicecenter) throws Throwable {
      	//click on  required service center    	
    	
    	WebDriverWait webdriverwait=new WebDriverWait(driver,10);
    	webdriverwait.until(ExpectedConditions.visibilityOfElementLocated(By.linkText(servicecenter)));
    	WebElement servicecenterelement = driver.findElement(By.linkText(servicecenter));
    	servicecenterelement.click(); 
    	//The service center selected is 
    	String selectedservicecenter=driver.findElement(By.xpath("/html/body/div[1]/header[2]/div/h1")).getText();
    	System.out.println("The Expected Service center to be selected is :  "+ servicecenter +"\n");
    	System.out.println("The Actual Service Center Selected is :" + selectedservicecenter);
    	driver.quit();
    }
    
       
}