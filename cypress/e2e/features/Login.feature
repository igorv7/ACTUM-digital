Feature: Login
    Test login functionality on Demoblaze demo app

  Scenario: Test successful login
    Given I visit demoblaze webpage
    When I click on Log In tab
    When I enter log in username value "blazeyourself@mail.com"
    When I enter log in password value "Boss123"
    When I click on Log in button
    Then I validate the correct user is logged in

  Scenario: Test login with wrong username
    Given I visit demoblaze webpage
    When I click on Log In tab
    When I enter log in username value "blazewrongusername@mail.com"
    When I enter log in password value "Boss123"
    Then I click on Log in button and validate alert message "User does not exist."

  Scenario: Test login with wrong password
    Given I visit demoblaze webpage
    When I click on Log In tab
    When I enter log in username value "blazeyourself@mail.com"
    When I enter log in password value "Bigboss1234"
    Then I click on Log in button and validate alert message "Wrong password."

  Scenario: Test login with empty credentials
    Given I visit demoblaze webpage
    When I click on Log In tab
    Then I click on Log in button and validate alert message "Please fill out Username and Password."
