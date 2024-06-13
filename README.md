## In PlayingWithAngular
1) In main app.component, how to use ONE function to work on different variables, surprisingly complicated <br>
2) note ng-content structure kinda wrong logically as it is rendering the button always, rendering its purpose moot
3) first-try component is [ngClass] sample
4) second-try component is day31 chuk code (both workshop and lesson code)
    - covers structural directives (*ngIf/*ngFor) vs New flow control after V15 (@for/@if, there is @empty as well but that one ez otot google)
    - simple logic sample (%2 for odd or even, for loop tracking index and concatenating it to the string)
    - sample pipe code in html to format strings
    - sample $event code in function
    - input() and output()
    - model, arrays, mapping arrays
    - deep copying arrays using json
        1) note limitations and need for lodash, refer notes
        2) copying using json is possible because arrays are initialized in json format (see commented out code)
5) third-try component is day34 chuk code (both workshop and lesson code)
    - injection sample
    - working with forms
    - validators
    - writing models and service ts files
    - the openweather api key is hardcoded but in practise it should be a api call onto spring boot backend to not expose the key (mr gpt says theres no @value and setting it in properties file equivalent)
## Indexing Chuk's Code
    - spring boot uploading to s3 with thymeleaf (https://github.com/chukmunnlee/ibf2023/tree/master/day37-uploads)
    