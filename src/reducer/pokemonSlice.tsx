import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../type/Pokemon";

interface PokemonState {
	filter: string;
	pokemon: Pokemon[];
	selectPokemon: Pokemon | null;
}

const initialState: PokemonState = {
	filter: "",
	pokemon: [],
	selectPokemon: null
}

const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {
		setFilter: (state, action: PayloadAction<string>) =>{
			state.filter = action.payload
		},

		setPokemon: (state, action: PayloadAction<Pokemon[]>) =>{
			state.pokemon = action.payload
		},

		setSelectPokemon: (state, action: PayloadAction<Pokemon | null>) =>{
			state.selectPokemon = action.payload;
		}

	}
})

export const { setFilter, setPokemon, setSelectPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer