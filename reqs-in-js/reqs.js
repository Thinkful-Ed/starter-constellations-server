const axios = require("axios");

// const url = "http://localhost:5000/constellations";
// axios
//   .get(url)
//   .then((response) => {
//     const output = response.data.filter((constellation) => {
//       return constellation.starsWithPlanets < 10
//     })
//     console.log(output)
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

  // const url = "http://localhost:5000/constellations";
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

    // const url = "http://localhost:5000/constellations/7ofFseY";
    // axios
    // axios.delete(url).then((response) => {
    //   console.log(response.status);
    //   console.log(response.statusText);
    //   console.log(response.data);
    // });

    // const url = "http://localhost:5000/constellations/";
    // axios
    // axios.get(url).then((response) => {
    //   console.log(response.status);
    //   console.log(response.statusText);
    //   console.log(response.data);
    // });

    new Promise((resolve, reject) => {
      const random = Math.floor(Math.random() * 10);
      random > 5 ? resolve(random) : reject(random);
    })
      .then((response) => {
        console.log("Resolved!", response);
        return response;
      })
      .catch((response) => {
        console.log("Rejected!", response);
        return response;
      })
      .then((response) => {
        console.log("Add 10", response + 10);
      });