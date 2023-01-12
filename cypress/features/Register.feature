Feature: Sign Up
    Test sign up functionality on Demoblaze demo app

  Background: 
    Given I visit demoblaze webpage

  Scenario: Test successful sign up
    When I click on Sign Up tab
    When I enter new sign up username
    When I enter new sign up password
    Then I click on Sign up button and validate alert message "Sign up successful."

  Scenario: Test sign up with already existing account
    When I click on Sign Up tab
    When I enter sign up username value "blazesomebody@mail.com"
    When I enter sign up password value "Boss123"
    Then I click on Sign up button and validate alert message "This user already exist."

  Scenario: Test sign up with empty credentials
    When I click on Sign Up tab
    Then I click on Sign up button and validate alert message "Please fill out Username and Password."
