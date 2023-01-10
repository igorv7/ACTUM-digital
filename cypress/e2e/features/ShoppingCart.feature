Feature: Shopping Cart
    Test shopping cart functionality on Demoblaze demo app

  Background: 
    Given All Demoblaze routes are intercepted
    Given I visit demoblaze webpage
    When I click on Log In tab
    When I enter log in username value "blazeyourself@mail.com"
    When I enter log in password value "Boss123"
    When I click on Log in button
    Then I validate the correct user is logged in

  Scenario: Purchase Samsung Galaxy S7 phone
    Given I visit demoblaze webpage
    When I click on category Phones
    When I open Samsung Galaxy S7 item
    When I click on Add to Cart button
    When I capture Add Item To Cart response
    Then I assert that Add to Cart API response has been successful
    When I go to Shopping Cart page
    Then I validate the total price in the Cart is 800
    When I click on "Place Order" button
    Then I validate the total price in the form is 800
    When I enter "Prince Igor" in Name field
    When I enter "Oman" in Country field
    When I enter "Alpha" in City field
    When I enter "123456789" in Credit card field
    When I enter "03" in Month field
    When I enter "2030" in Year field
    When I click on "Purchase" button
