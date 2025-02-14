import axios, { AxiosResponse } from "axios";
import { Pokemon } from "../type/Pokemon";

const URL = "http://localhost:5173/src/pokemon.json"; // Убедитесь, что путь правильный

export async function getPokemon(): Promise<Pokemon[]> {
	try {
		const response: AxiosResponse<Pokemon[]> = await axios.get(URL);
		return response.data;
	} catch (error) {
		console.error("Ошибка при получении данных о покемонах:", error);
		throw error; // или вернуть пустой массив/значение по умолчанию
	}
}
