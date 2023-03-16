const axios = require("axios")

const url = "http://localhost:5001/constellations"
axios
    .get(url)
    .then((response) => {
        //Filtering the requested data based on arguments
        const result = response.data.filter((constellation) => {
            return constellation.starsWithPlanets < 10
        })
        console.log(result)
        
        //Generic request to display all data pulled and specific status information
        console.log(response.status)
        console.log(response.statusText)
        // console.log(response.data)
    })
    .catch((error) => {
        console.log(error.message)
    })


//add via .post method in postman, returns response of newly added entry
// axios
//   .post(url, {
//     name: "Ara",
//     meaning: "Altar",
//     starsWithPlanets: 7,
//     quadrant: "SQ3",
//   })
//   .then((response) => {
//     console.log(response.data);
//   });

//delete newly created entry from post
// const url = "http://localhost:5001/constellations/os08Kd9"
// axios  
//     .delete(url)
//     .then((response) => {
//         console.log(response.data)
//     })