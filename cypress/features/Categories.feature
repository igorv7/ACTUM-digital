Feature: Categories
    Test all categories functionality on Demoblaze demo app

  Background: 
    Given I visit demoblaze webpage

  Scenario: Test Phone category
    When I click on category Phones
    When I open Samsung Galaxy S7 item
    Then I validate that item name is "Samsung galaxy s7"
    Then I validate that item price is "$800"
    Then I validate that Add to cart button is visible

  Scenario: Test Laptop category
    When I click on category Laptops
    When I open Macbook Pro item
    Then I validate that item name is "MacBook Pro"
    Then I validate that item price is "$1100"
    Then I validate that Add to cart button is visible

  Scenario: Test Monitor category
    When I click on category Monitors
    When I open Apple Monitor item
    Then I validate that item name is "Apple monitor 24"
    Then I validate that item price is "$400"
    Then I validate that Add to cart button is visible
