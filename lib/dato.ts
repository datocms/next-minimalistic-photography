import "server-only";

import { cache } from "react";

export function gql(template: TemplateStringsArray) {
	return template[0];
}

const dedupableRequest = cache(
	async <TDocument = unknown>(payload: string): Promise<TDocument> => {
		const request = await fetch("https://graphql.datocms.com/", {
			headers: {
				Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
				"X-Exclude-Invalid": "true",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: payload,
		});

		if (!request.ok) {
			throw new Error(`Failed request ${payload}`);
		}

		const result = await request.json();

		return result.data;
	},
);

export async function request<TDocument = unknown, TVariables = unknown>(
	query: string,
	variables?: TVariables,
): Promise<TDocument> {
	return dedupableRequest<TDocument>(JSON.stringify({ query, variables }));
}
