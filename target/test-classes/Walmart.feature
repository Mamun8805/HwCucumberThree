# This is a Feature
Feature: Login feature
  # This is a Positive Scenario
  Scenario: Login with valid credentials
    # These are the steps
    Given I navigate to walmart.com
    And I click on login button
    When I enter userId and Password
    And I click on login button
    Then I should see the welcome message