Feature: Login Feature
  Verify if user is able to Login in to the site


   Scenario Outline: search service center   
    Given navigate to nsw service center url
    When Search for Apply for a number plate
    And Click on Locate us button
    And Enter suburb  <suburb>
    Then Select the service center <servicecenter>
    
   Examples:   
	  |suburb 		 | servicecenter | 
	  |Sydney 2000 | Marrickville Service Centre |
	  |Sydney Domestic Airport 2020|Rockdale Service Centre|
	    