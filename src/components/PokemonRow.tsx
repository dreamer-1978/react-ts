import { Pokemon } from "../type/Pokemon";
import { Button } from "@mui/material";

interface PokemonRowProps {
	pokemon: Pokemon;
	selectItem: (pokemon: Pokemon) => void;
}

export default function PokemonRow({ pokemon, selectItem }: PokemonRowProps) {
	return (
		<tr>
			<td className="pokemon-name">{pokemon.name.english}</td>
			<td className="pokemon-type">{pokemon.type.join(", ")}</td>
			<td>
				<Button
					color="info"
					variant="outlined"
					onClick={() => selectItem(pokemon)}>
					Select
				</Button>
			</td>
		</tr>
	);
}
