import React from "react";
import styled from "@emotion/styled";

interface SearchPokemonProps {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = styled.input`
	width: 100%;
	font-size: x-large;
	border-radius: 6px;
	padding: 0.2rem;
`;

export default function SearchPokemon({ handleChange }: SearchPokemonProps) {
	return <Input placeholder="Search for Pokemon by Name" onChange={handleChange} type="text" />;
}
