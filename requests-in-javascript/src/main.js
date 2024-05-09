const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function getAllNames() {
    axios
        .get(BASE_URL)
        .then((response) => {
            const result = response.data
            for (i = 0; i < result.length; i++) {
                console.log(result[i]['name'])
            }
        })
}

function getConstellationsByQuadrant(quadrant) {}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
