const axios = require("axios");

const url = "http://localhost:5001";


    function getConstellationsByQuadrant(quadrant) {
        axios
        .get(url+'/constellations/')
        .then((response) => {
            const result = response.data.filter((byQuadrant) => {
                return byQuadrant.quadrant === quadrant
            })
            console.log(result)
        })
    }

getConstellationsByQuadrant('SQ2')