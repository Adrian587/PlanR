const Aggregator = require("./model/Aggregator.js");

class Planr {

  constructor() {
    this.itineraries = {
      "ilikecock": new Aggregator(),
      "test": new Aggregator()
    }; // dictionary key:value = slug: Aggregator
    
    this.getAggregator("test").hostData = {
      "startDate": "07/04/2020",
      "endDate": "07/06/2020",
      "stayLength": 5,
      "groupBudget": 123,
      "groupSize": 1,
      "latitude": "49.2827291",
      "location": "Vancouver, BC, Canada",
      "longitude": "-123.1207375"
    }
  }

  /**
   * recieves a host data object from the form and inserts it into itineraries dict as a key/value pair
   * where a random slug is the key, and the value is a new aggregator class
   * 
   * returns the slug
   *  
   * @param  {Object} hostData
   * @return {string} the key to the new aggregator data in itineraries
   */
  sendHostData(hostData) {
    let slug = this.makeid(5);
    this.itineraries[slug] = new Aggregator();
    this.itineraries[slug].hostData = hostData;
    this.itineraries[slug].slug = slug;
    this.itineraries[slug].url = `http://owlplanr.tech/${slug}/itinerary`;

    return slug;
  }
  /**
   *  returns aggregator associated with slug or null if doesnt exist
   * 
   * @param  {string} slug
   * @return {Aggregator}
   */
  getAggregator(slug) {
    return this.itineraries[slug];
  }

  /**
   * recieves a surveydata object from the form and adds it to the aggregator associated with the given slug
   * 
   * returns the slug
   *  
   * @param  {Object} slug
   * @param  {Object} surveyData
   * @return {string} the key to the new aggregator data in itineraries
   */
  sendSurveyData(slug, surveyData) {
    console.log("sending survey data")
    this.getAggregator(slug).addSurveyData(surveyData); 
  }

  /**
   * check if slug exists as a key in the itineraries dict
   * @param  {string} slug
   * @return {boolean} 
   */
  hasSlug(slug) {
    return slug in this.itineraries;
  }

  /**
   * generates a random string slug of a specified length
   * 
   * @param  {number} length
   * @return {string} a random string of a specified length 
   * 
   * @example
   *   makeid(5) => Ad87b
   */
  makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  /**
   * returns true if the itinerary is generated and ready to display for a given slug
   * 
   * @param  {string} slug
   * @return {boolean}
   */
  itineraryReady(slug) {
    return this.getAggregator(slug).itineraryReady();
  }
}

module.exports = Planr; 