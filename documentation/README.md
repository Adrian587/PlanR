    # Hackcation Project

We created a project to help people going on vacation settle their conflicting interests and form a personalized travel itinerary to ensure that everybody has a good time!

We do this through an input submission on our custom made web applicaiton that gages the interests of each individual member of the group, then based of their submissions, we create a custom score that relates to the individuals interests, and based on the overall group score, shows a custom made trip for the group.

# Essential Features
- Lobby System + Code/Custom Link (form groups)
- Take in user input on location of vacation 
- Sends out a link to a survey that people taking the vacation need to fill out 
    - what kinds of questions should the survey have?
    - favourite food? cravings? fine with anything?
    - activities? (hiking, surfing, etc.)
    - total budget for the trip? 
    - trip duration
- Takes the survey results and creates an itenerary for the trip
- Implement Google Maps API to show the locations of all the given areas and the ways to get to the places

## Host Questions
- Host survey
- How long are you planning to stay (Date - Date) Use calendar [jan 22 - jan 25]
- What is your proposed overall group budget for the vacation (USD)
- What location are you travelling to (City) Auto Search Google Maps
- How many people are planning to join you on the vacation?
Waits for the host to end, then group portion starts


## Individual Questions
- What is your age?
- Any dietary restrictions [select all that apply] (Does nothing LOL)
    - Vegetarian
    - Vegan
    - Nuts Allergies
    - Lactose Intolerant 
    - No Pork
    - No Beef
    - Others (input box)
- Categories of Restaurants/Foods [select all that apply]
    - Sushi 
    - Asian
    - Italian 
    - Steakhouse  
    - Indian
    - American
    - Burgers
    - Pho
    - Ramen
    - Other (input box)
- What activities are you most interested in doing? Want it balanced/focused on something? [select all that apply]    - Landmarks
    - Amusement parks
    - Water parks
    - Museums
    - Fine dining / tasting
    - Historical areas
    - Sports
    - Hiking
    - Night Life
    - Hiking
    - Other (input box)

## Tasks

1. Survey
2. Backend
   1. Aggregating all the survey data to produce a recommendation
      1. Finding apis that search for attractions, restaurants based on keywords, etc
         1. google maps
   2. Creating a list of attractions from Google Maps
3. Display all data
4. Figma Design
5. Code the link to support multiple groups (hardcode this)

How to transfer data from frontend survey to backend
- rest api 
  - frontend collects the survey data
  - it sends all this data to an endpoint to the backend which interprets this as a new person in the group
  - hardcode when the backend actually produces the result - 4
  - process data to return results
  - send results to frontend



## Technologies
- Places API
- Directions API


## What do u guys want to learn
- 

# Complementary Features
- Balance whose interests are chosen throughout the overall vacation
- Implement a Cravings feature so people who REALLY want to do something will have it prioritized
- Implement a "Meh" feature so people who are fine with anything for a specific question can simply go with what others want

# User Story

## Problem
- All saints going on vacation to Cancun and we are having a big argument as to which hotel to stay at, what to eat, what to do there, what clubs to party at etc.

1. One of us gets the website and gets a link/code to share to everybody
2. The website asks us a questions related to where we are going, what our interests are, our budget, our travel dates, food preferences (especially if there are any allergies/dietary restrictions) what type of vacation this is 
(relaxed, adrenaline fueled, etc.)    
3. The app will generate an itenerary based on the group's survey results
4. Enjoy vacation 


## Final Itenerary / Product 
8:00 AM : Activity    @ ______
10:00AM : Breakfast   @ ______
11:00AM : Activity    @ ______
1:00PM : Lunch        @ ______
2:00PM : Activity     @ ______
5:00PM: Dinner        @ ______






## API KEYS 
AIzaSyDMm7mFoUiBLqbrf4Oo2NTAj7Q3S4yXNF8 - places API 