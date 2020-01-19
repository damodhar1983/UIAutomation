Feature: Login Feature
  Verify if user is able to Login in to the site


   Scenario Outline: search service center   
    Given navigate to nsw service center url
    When Search for Apply for a number plate
    And Click on Locate us button
    And Enter suburb Sydney 2000
    Then Select the service center <servicecenter>
    
   Examples:   
	  | servicecenter | 
	  | Marrickville Service Centre |
	    