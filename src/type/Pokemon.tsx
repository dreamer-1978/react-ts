export interface Pokemon {
	id: number;
	name: {
		english: string;
		japanese: string;
		chinese: string;
		french: string;
	};
	type: string[];
	base: {
		HP: number;
		Attack: number;
		Defense: number;
		"Sp. Attack": number;
		"Sp. Defense": number;
		Speed: number;
	};
}

export  interface PokemonApiResponse {
	results: Pokemon[]
}

export interface PokemonState {
	filter: string;
	pokemon: Pokemon[];
	selectPokemon: Pokemon | null
}

// src/reducer/types.ts
export type PokemonAction =
	| { type: "SET_FILTER"; payload: string }
	| { type: "SET_POKEMON"; payload: Pokemon[] } // Замените any на конкретный тип покемонов
	| { type: "SET_SELECT_POKEMON"; payload: Pokemon | null }; // Замените any на конкретный тип выбранного покемона
