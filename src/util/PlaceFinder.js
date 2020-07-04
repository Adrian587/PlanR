/**
 * 
 * Determines all of the places that satisfy the user specifications
 * 
 */

export class PlaceFinder {
 API_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
 //  [yourquerystring]&key=[yourkeyhere]"
//  "https://maps.googleapis.com/maps/api/place/textsearch/json?query=victoria+restaurants&key=AIzaSyDMm7mFoUiBLqbrf4Oo2NTAj7Q3S4yXNF8"
    constructor(city) {
        this.queryCity = city; // the city from the survey 
    }

    
/**
 * makes a POST(?) request to the api to get a result from Google
 */
processQuery() {
    //TODO 
    return; 
}
/**
 * Forms a request to a restaurant/activity based on input and queried city. 
 * input is the determinedRestaurant or the determinedActivity 
 * @param  {} input
 */
formRequest(input) {
    return API_URL + queryCity + "+" + input + "&key=" + readKey();
}


// /**
//  * Forms a restaurant request based on the city and determined restaurant 
//  */
// formRestaurantRequest() {
//         return API_URL + queryCity + "+" + determinedRestaurant1 + "&key=" + readKey();
//     }

// formRestaurantRequest() {
//     return API_URL + queryCity + "+" + determinedRestaurant2 + "&key=" + readKey();
// }

// formRestaurantRequest() {
//     return API_URL + queryCity + "+" + determinedRestaurant3 + "&key=" + readKey();
// }
// /**
//  * Forms an activity request based on the city and determined activity
//  */
// formActivityRequest() {
//     return API_URL + queryCity + "+" + determinedActivity1 + "&key=" + readKey();
// }

// formActivityRequest() {
//     return API_URL + queryCity + "+" + determinedActivity2 + "&key=" + readKey();
// }

/**
 * this function reads the api key from secrets.txt, not sure if it works, if it doesnt just pass the key in directly 
 */
readKey() {
    key = open("secrets.txt", "r"); 
    contents = key.read(); 
    console.log(contents.strip());
    return contents.strip(); 
}

}