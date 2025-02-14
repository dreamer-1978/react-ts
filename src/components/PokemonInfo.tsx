

interface PokemonInfoProps {
    id: number;
    name: {
        english: string;
        japanese?: string;
        chinese?: string;
        french?: string;
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

export default function PokemonInfo({name, base}: PokemonInfoProps) {
	return (
		<div>
			<h1>{name.english}</h1>
			<table>
				<tbody>
					{Object.keys(base).map((key) => (
						<tr key={key}>
							<td>{key}</td>
							<td>{base[key as keyof typeof base]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
