// Uncomment the following to see STDERR of the server
//process.env.NODE_ENV = "dev";

const axios = require("../utils/axios");
const { getAllNames, getConstellationsByQuadrant } = require("../src/main");

jest.mock('axios');
const BASE_URL = "http://localhost:5000";

describe("Assignment", () => {

  describe("getAllNames()", () => {
    const data = [
      {
        id: "HwLvy2S",
        name: "Ursa Minor",
        meaning: "Little Bear",
        starsWithPlanets: 6,
        quadrant: "NQ3",
      },
      {
        id: "dFBbdkr",
        name: "Vela",
        meaning: "Sails",
        starsWithPlanets: 7,
        quadrant: "SQ2",
      },
    ];

    const resp = {data: data};

    beforeEach(() => {
      jest.spyOn(axios, 'get');
      axios.get.mockImplementation(() => Promise.resolve(resp));
    });
    
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should make a GET request to the appropriate URL", async () => {
      await getAllNames();
      const expectedURL = `${BASE_URL}/constellations`;
      expect(axios.get).toHaveBeenCalledWith(expectedURL);
    });
    
    it("should log an array of names from all the constellations", async () => {
      const spy = jest.spyOn(console, 'log').mockImplementation();
      await getAllNames();
      expect(console.log).toBeCalledWith(["Ursa Minor", "Vela"]);
    });
  });
  
  describe("getConstellationsByQuadrant()", () => {
    const data = [
      {
        id: "HwLvy2S",
        name: "Ursa Minor",
        meaning: "Little Bear",
        starsWithPlanets: 6,
        quadrant: "NQ3",
      },
      {
        id: "dFBbdkr",
        name: "Vela",
        meaning: "Sails",
        starsWithPlanets: 7,
        quadrant: "SQ2",
      },
    ];

    const resp = {data: data};
    
    beforeEach(() => {
      jest.spyOn(axios, 'get');
      axios.get.mockImplementation(() => Promise.resolve(resp));
    });
    
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should make a GET request to the appropriate URL", async () => {
      await getConstellationsByQuadrant("SQ2");
      const expectedURL = `${BASE_URL}/constellations`;
      expect(axios.get).toHaveBeenCalledWith(expectedURL);
    });

    it("should log only those constellations within the matching quadrant", async () => {
      await getConstellationsByQuadrant("SQ2");
      expect(console.log).toHaveBeenCalledWith([
        {
          id: "dFBbdkr",
          name: "Vela",
          meaning: "Sails",
          starsWithPlanets: 7,
          quadrant: "SQ2",
        },
      ]);
    });
  });
});