/** 
 * Aggregates results of surveys to js. Takes data from users.js 
 * 
 * */ 
var Dict = require("collections/dict");
class Aggregator {
    // list of user data
    // const data = user. 
   
    constructor() {
        this.location = null; 
        this.hostData = {}; 
        this.surveyData = []; 
        // [{person1's preferences}, {person2's preferences}, {person3's preferences}]
        // this.tripLength = hostData.tripLength; 
        // this.startDate = hostData.startDate;   
        // this.endDate = hostData.endDate;
        // this.groupBudget = hostData.groupBudget;        // USD 
        // this.groupSize = hostData.groupSize;            
        // this.groupAges = surveyData.groupAges; 
        // this.restaurants = surveyData.restaurants;
        // this.activites = surveyData.activities; 
    }
    
//  hostData:    {"length of stay": "", "group budget": 500}

    /**
     * Given surveyData on activities that the group likes to do, choose one activity 
     * that is the best for the group. 
     */
    parseAllActivities() {
        const numActivites = tripLength * 2; 
          activitiesList = [];  
        for(let i = 0; i < surveyData.length; i++) {
             activitiesList.push(surveyData[i].activities);
        }
    }
    /**
     * Given surveyData on restaurants that the group likes then choose one restaurant 
     * that is the best for the group.
     *
     */
    parseAllRestaurants() {

    }
}

module.exports = Aggregator;
