import React from "react";
import styled from "@emotion/styled";
import "./App.css";
import { useState, useEffect } from "react";
import PokemonRow from "./components/PokemonRow";
import SearchPokemon from "./components/SearchPokemon";
import PokemonInfo from "./components/PokemonInfo";
import { getPokemon } from "./api/pokemonData";
import { Pokemon } from "./type/Pokemon";
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
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	const [filter, setFilter] = useState<string>("");
	const [selectedItem, setSelectedItem] = useState<Pokemon | null>(null);

	useEffect(() => {
		const fetchPokemon = async () => {
			const data: Pokemon[] = await getPokemon();
			if (data) {
				setPokemons(data);
			}
		};
		fetchPokemon();
	}, []);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setFilter(event.target.value);
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
								{pokemons
									.filter((pok) =>
										pok.name.english
											.toLowerCase()
											.includes(filter.toLowerCase()),
									)
									.slice(0, 20)
									.map((pokemon) => (
										<PokemonRow
											onSelect={setSelectedItem}
											pokemon={pokemon}
											key={pokemon.id}
										/>
									))}
							</tbody>
						</table>
					</div>
					{selectedItem && <PokemonInfo {...selectedItem} />}
				</TwoColumnsLayout>
			</Container>
		</>
	);
}

export default App;
