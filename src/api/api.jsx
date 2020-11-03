import Axios from 'axios';

const ApiSearch = {
    Search(pokedex) {
        return Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokedex}/`);

    },
    Evolution(pokedex) {
        return Axios.get(`https://pokeapi.co/api/v2/evolution-chain/${pokedex}/`);

    }
}

export default ApiSearch;