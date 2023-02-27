import "server-only";

import { GraphQLClient, Variables } from "graphql-request";
import { RequestDocument } from "graphql-request/dist/types";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { cache } from "react";

const graphQLClient = new GraphQLClient("https://graphql.datocms.com/", {
	fetch,
});

function rawRequest<TDocument = unknown>(
	document: RequestDocument | TypedDocumentNode<TDocument, Variables>,
	variables?: Variables,
) {
	return graphQLClient.request<TDocument, Variables>(document, variables, {
		Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
		"X-Exclude-Invalid": "true",
	});
}

export const request = cache(rawRequest);
