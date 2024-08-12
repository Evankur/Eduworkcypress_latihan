Feature: Functionality search

    as user use search function
    I want use searchbar

    Scenario: searching name context
    Given I on the searchbar
    When I enter help in searchbar and clik "enter"
    Then it should found and should display the result 