import dotenv from "dotenv";
import type { IGraphQLConfig } from "graphql-config";

dotenv.config({ path: ".env.local" });

const config: IGraphQLConfig = {
	schema: [
		{
			"https://graphql.datocms.com": {
				headers: {
					Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
					"X-Exclude-Invalid": "true",
				},
			},
		},
	],
	documents: "./**/*.graphql",
	extensions: {
		codegen: {
			generates: {
				"graphql/generated.ts": {
					plugins: [
						"typescript",
						{
							"typescript-operations": {
								strictScalars: true,
								scalars: {
									BooleanType: "boolean",
									CustomData: "Record<string, unknown>",
									Date: "string",
									DateTime: "string",
									FloatType: "number",
									IntType: "number",
									ItemId: "string",
									JsonField: "unknown",
									MetaTagAttributes: "Record<string, string>",
									UploadId: "string",
								},
							},
						},
						"typed-document-node",
					],
				},
			},
		},
	},
};

export default config;
