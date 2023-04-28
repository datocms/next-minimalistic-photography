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
	async <TDocument = unknown>(
		payload: string,
		revalidate?: number | false,
	): Promise<TDocument> => {
		const response = await fetch("https://graphql.datocms.com/", {
			headers: {
				Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
				"X-Exclude-Invalid": "true",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: payload,
			next: {
				revalidate,
			},
		});

		if (!response.ok) {
			throw new Error(`Failed request ${payload}`);
		}

		const result = await response.json();

		return result.data;
	},
);

type RequestOptions = {
	/**
	 * Configure how the request should interact with Next.js HTTP cache. Possible values:
	 *
	 * * false - Cache the resource indefinitely (default)
	 * * 0 - Prevent the resource from being cached.
	 * * number - (in seconds) Specify the resource should have a cache lifetime of at most n seconds.
	 */
	revalidate?: number | false;
};

export async function request<TResult = unknown, TVariables = unknown>(
	query: TypedDocumentNode<TResult, TVariables>,
	variables?: TVariables,
	options?: RequestOptions,
): Promise<TResult> {
	return dedupableRequest<TResult>(
		JSON.stringify({ query: print(query), variables }),
		options?.revalidate,
	);
}
