Feature: Login
    Test login functionality on Demoblaze demo app

  Background: 
    Given I visit demoblaze webpage

  Scenario: Test successful login
    When I click on Log In tab
    When I enter log in username value "blazeyourself@mail.com"
    When I enter log in password value "Boss123"
    When I click on Log in button
    Then I validate the correct user is logged in

  Scenario: Test login with wrong username
    When I click on Log In tab
    When I enter log in username value "blazewrongusername@mail.com"
    When I enter log in password value "Boss123"
    Then I click on Log in button and validate alert message "User does not exist."

  Scenario: Test login with wrong password
    When I click on Log In tab
    When I enter log in username value "blazeyourself@mail.com"
    When I enter log in password value "Bigboss1234"
    Then I click on Log in button and validate alert message "Wrong password."

  Scenario: Test login with empty credentials
    When I click on Log In tab
    Then I click on Log in button and validate alert message "Please fill out Username and Password."
