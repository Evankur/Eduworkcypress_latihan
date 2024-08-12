Feature: login ke sebuah aplikasi

    as user valid
    I want login application

    Scenario: valid login
    Given I open login page
    When I submit to login
    Then I should go to homepage