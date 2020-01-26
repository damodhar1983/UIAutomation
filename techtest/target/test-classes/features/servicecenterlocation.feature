Feature: Selecting Servlice center Location
  Verify if user is able to select the required Service center

  Scenario Outline: search service center
    Given navigate to nsw service center <URL>
    When Search for Apply for a number plate
    And Click on Locate us button
    And Enter suburb  <suburb>
    Then Select the service center <servicecenter>

    Examples: 
      | URL                               | suburb                       | servicecenter               |
      | "https://www.service.nsw.gov.au/" | Sydney 2000                  | Marrickville Service Centre |
      | "https://www.service.nsw.gov.au/" | Sydney Domestic Airport 2020 | Rockdale Service Centre     |
