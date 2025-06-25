import type { Ingredient } from "@/types";

export function slugify(title: string): string {
	return title
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)+/g, "");
}

export function formatAmount(amount: number): string {
	const rounded = Math.round(amount * 4) / 4;
	return rounded % 1 === 0 ? rounded.toFixed(0) : rounded.toFixed(2);
}

export function parseInstruction(
	text: string,
	ingredients: Ingredient[],
	multiplier: number
): string {
	return text.replace(
		/\{amount:([a-zA-Z0-9_-]+)(?::([0-9]+)\/([0-9]+))?\}/g,
		(_, slug: string, numerator: string, denominator: string) => {
			const ing = ingredients.find((i) => i.slug === slug);
			if (!ing) return "[onbekend ingrediënt]";

			const fraction =
				numerator && denominator
					? parseInt(numerator) / parseInt(denominator)
					: 1;
			const totalAmount = ing.amount * multiplier * fraction;

			const formattedAmount = formatAmount(totalAmount);

			return `${formattedAmount} ${ing.unit}`;
		}
	);
}

export function formatTime(minutes: number): string {
	const hours = Math.floor(minutes / 60);
	const mins = minutes % 60;
	if (hours && mins) return `${hours} uur ${mins} min`;
	if (hours) return `${hours} uur`;
	return `${mins} min`;
}

export function formatTimeLabelledShort(
	defrostTime?: number,
	cookingTime?: number,
	ovenTime?: number,
	additionalWaitTime?: number
): string {
	const parts: string[] = [];

	if (defrostTime) parts.push(`Ontdooien ${formatTime(defrostTime)}`);
	if (cookingTime) parts.push(`Koken ${formatTime(cookingTime)}`);
	if (ovenTime) parts.push(`Oven ${formatTime(ovenTime)}`);
	if (additionalWaitTime)
		parts.push(`Wachten ${formatTime(additionalWaitTime)}`);

	return parts.join(" · ");
}
