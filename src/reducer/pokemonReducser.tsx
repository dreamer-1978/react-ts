import { PokemonState, PokemonAction } from "../type/Pokemon";

	export const pokemonReducer = (state: PokemonState, action: PokemonAction): PokemonState => {
		switch (action.type) {
			case "SET_FILTER":
				return {
					...state,
					filter: action.payload,
				};
			case "SET_POKEMON":
				return {
					...state,
					pokemon: action.payload,
				};
			case "SET_SELECT_POKEMON":
				return {
					...state,
					selectPokemon: action.payload,
				};
			default:
				throw new Error("No Pokemon");
		}
	};