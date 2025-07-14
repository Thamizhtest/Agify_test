# Agify_test
## Purpose 
The purpose of this README is to provide general guidance on return the guestimated age of a person when name passed to the provided the API agify.io.
This is a simple API, that
accepts one parameter, a name (for example, ‘billybob’), and returns the
guesstimated age of a person with this name (for example, ‘59’).

## Background step
The following example scenarios demonstrate how to approch testing for this API to ensure service is available and responds correctly.

- If an API is not available ,the test should fail and return the corresponding error
- feature file accepts multiple combination of the input name, User can provide First Name or Full Name or Along with middle name, API will fetch the FirstName's Age and display the name whatever passed in the example. Also if name is not passed it will fail and show the error as "Missing 'name' parameter"

## Scenario
Scenario Outline: Return the age of a person using API
    Given the API is accessible
    When I call the API with the name "<name>" 
    Then response should return the Age>0

    Examples:
        | name              |   
        | John Jeni         |
        | John              |
        | Michel Joe Clinto |
        |                   |

## Expected result

Passed name : John Jeni , API response { count:277407,name:'John Jeni',age:74 }
Passed name : John , API response { count:277407,name:'John Jeni',age:74 }
Passed name : Michel Joe Clinto , API response { count:73797,name:'Michel Joe Clinto',age:66 }
Error: Missing 'name' parameter


##
Node version :v22.17.0
NPM version  :10.9.2

