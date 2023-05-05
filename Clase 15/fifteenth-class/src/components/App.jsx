// import React from "react";
// import axios from "axios";

// class Fetch extends React.Component {
//     componentDidMount() {

//     fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then((response) => response.json())
//     .then((data) => console.log("Datos obtenidos por fetch", data));

//     axios
//     .get("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then((res) => console.log("Datos obtenidos por axios", res));
//     }

//     render() {
//         return <div />;
//     }
// }
// export default Fetch;


import React from "react";
import axios from "axios";

class Fetch extends React.Component {
    componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((response) => console.log("Datos antes de ser convertidos a json en fetch", response));

    axios
    .get("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => console.log("Datos obtenidos por axios", res));
    }

    render() {
        return <div />;
    }
}

export default Fetch;