import { Pokemon } from "../type/Pokemon";
interface PokemonRowProps {
	pokemon: Pokemon;
	onSelect: (pokemon: Pokemon) => void
}

export default function PokemonRow({ pokemon, onSelect }: PokemonRowProps) {
	return (
		<tr>
			<td className="pokemon-name">{pokemon.name.english}</td>
			<td className="pokemon-type">{pokemon.type.join(", ")}</td>
			<td>
				<button onClick={() => onSelect(pokemon)}>Select</button>
			</td>
		</tr>
	);
}
