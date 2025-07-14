Feature: Return Age from API by Name
Scenario Outline: Return the age of a person using API
    Given the API is accessible
    When I call the API with the name "<name>" 
    Then response should return the Age>0

    Examples:
        | name                    |   
        | Michel Joe Clinto       |