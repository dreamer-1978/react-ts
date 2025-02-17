import React from "react";
import styled from "@emotion/styled";
import "./App.css";
import { useEffect } from "react";
import PokemonRow from "./components/PokemonRow";
import SearchPokemon from "./components/SearchPokemon";
import PokemonInfo from "./components/PokemonInfo";
import { getPokemon } from "./api/pokemonData";
import { Pokemon } from "./type/Pokemon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./reducer/store";
import {
	setFilter,
	setPokemon,
	setSelectPokemon,
} from "./reducer/pokemonSlice";

// const url: string = "https://pokeapi.co/api/v2/pokemon/bulbasaur";

const Title = styled.h1`
	text-align: center;
`;
const TwoColumnsLayout = styled.div`
	display: grid;
	grid-template-columns: 70% 30%;
	gap: 1rem;
`;

const Container = styled.div`
	margin: 0 auto;
	width: 800px;
	padding: 1rem;
`;

function App() {
	const dispatch = useDispatch();
	const pokemonList = useSelector((state: RootState) => state.pokemon.pokemon)
	const pokemonFilter = useSelector((state: RootState) => state.pokemon.filter)
	const pokemonSelect = useSelector((state: RootState) => state.pokemon.selectPokemon)
	
	useEffect(() => {
		const fetchPokemon = async () => {
			const data: Pokemon[] = await getPokemon();
			if (data) {
				dispatch(setPokemon(data));
			}
		};
		fetchPokemon();
	}, []);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		dispatch(setFilter(event.target.value));
	}

	function selectedItem(pokemon: Pokemon): void {
		dispatch(setSelectPokemon(pokemon))
	}

	return (
		<>
			<Container>
				<Title>Search Pokemon</Title>
				<TwoColumnsLayout>
					<div>
						<SearchPokemon handleChange={handleChange} />
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Type</th>
								</tr>
							</thead>
							<tbody>
								{pokemonList
									.filter((pok) =>
										pok.name.english
											.toLowerCase()
											.includes(pokemonFilter.toLowerCase()),
									)
									.slice(0, 20)
									.map((pokemon) => (
										<PokemonRow
											pokemon={pokemon}
											key={pokemon.id}
											selectItem={selectedItem}
										/>
									))}
							</tbody>
						</table>
					</div>
					{pokemonSelect && <PokemonInfo {...pokemonSelect} />}
				</TwoColumnsLayout>
			</Container>
		</>
	);
}

export default App;
