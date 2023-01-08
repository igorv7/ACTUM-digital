Feature: Sign Up
    Test sign up functionality on Demoblaze demo app

  Scenario: Test successful sign up
    Given I visit demoblaze webpage
    When I click on Sign Up tab
    When I enter sign up username value "blazesomebodyelseeee@mail.com"
    When I enter sign up password value "Boss1234"
    Then I click on Sign up button and validate alert message "Sign up successful."

  Scenario: Test sign up with already existing account
    Given I visit demoblaze webpage
    When I click on Sign Up tab
    When I enter sign up username value "blazesomebody@mail.com"
    When I enter sign up password value "Boss1234"
    Then I click on Sign up button and validate alert message "This user already exist."
