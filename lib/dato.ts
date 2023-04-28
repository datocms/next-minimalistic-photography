import "server-only";

import { cache } from "react";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { print } from "graphql";

/*
	POST requests are not automatically deduplicated when using fetch – only GET
	requests are. We can use `cache` to deduplicate requests. The cache arguments
	must be flat and only include primitives. Deep objects won’t match for deduplication.
*/

// https://beta.nextjs.org/docs/data-fetching/caching#graphql-and-cache

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
			next: {
				revalidate: 60,
			},
		});

		if (!request.ok) {
			throw new Error(`Failed request ${payload}`);
		}

		const result = await request.json();

		return result.data;
	},
);

export async function request<TResult = unknown, TVariables = unknown>(
	query: TypedDocumentNode<TResult, TVariables>,
	variables?: TVariables,
): Promise<TResult> {
	return dedupableRequest<TResult>(
		JSON.stringify({ query: print(query), variables }),
	);
}
