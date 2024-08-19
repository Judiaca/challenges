console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    //Log data
    console.log("Data: ", data);

    // Log all names list
    const allNames = data.results.map((person) => person.name);
    console.log("All names: ", allNames);

    //Log different values of data object : Luke
    console.log(
      "Data for Luke Skywalker: ",
      data.results.find((character) => character.name === "Luke Skywalker")
    );

    //Log different values of data object : Biggs Darklighterr
    console.log(
      "Data for Biggs Darklighter: ",
      data.results.find((character) => character.name === "Biggs Darklighter")
    );

    //Log different values of data object : R2-D2
    console.log(
      "Data for R2-D2: ",
      data.results.find((character) => character.name === "R2-D2")
    );

    //Log eye color of R2-D2
    console.log(
      "R2-D2's eye color is : ",
      data.results.find((character) => character.name === "R2-D2")?.eye_color ||
        "Not found"
    );
  } catch (error) {
    console.log("Error: ", error);
  }
}

fetchData();
