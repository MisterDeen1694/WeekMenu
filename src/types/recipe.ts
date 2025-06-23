import type { Ingredient } from "./ingredient";
import type { Instruction } from "./instruction";

export type Recipe = {
	id: string;
	title: string;
	author?: string;
	source?: string;
	cover?: string;
	ingredients: Ingredient[];
	instructions: Instruction[];
};
