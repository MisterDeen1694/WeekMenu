import { parseInstruction } from "@/utils/formatting";
import type { IngredientWithNutrients } from "@/types";

export function parseInstructions(
	instructions: { instruction: string; image: string | null }[],
	ingredients: IngredientWithNutrients[],
	multiplier: number
) {
	return instructions.map((step) => ({
		...step,
		text: parseInstruction(step.instruction, ingredients, multiplier),
	}));
}
