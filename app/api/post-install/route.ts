import { NextResponse } from "next/server";
import { ApiError, buildClient, Client } from "@datocms/cma-client-node";

/*
  These endpoints are called right after bootstrapping the Starter project...
  they can be removed afterwards!
*/

export async function OPTIONS() {
	return new Response("OK", {
		status: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "POST",
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
		},
	});
}

const baseUrl = process.env.VERCEL_URL
	? // Vercel auto-populates this environment variable
	  `https://${process.env.VERCEL_URL}`
	: // Netlify auto-populates this environment variable
	  process.env.URL;

async function installWebPreviewsPlugin(client: Client) {
	const webPreviewsPlugin = await client.plugins.create({
		package_name: "datocms-plugin-web-previews",
	});

	await client.plugins.update(webPreviewsPlugin, {
		parameters: {
			frontends: [
				{ name: "Production", previewWebhook: `${baseUrl}/api/preview-links` },
			],
			startOpen: true,
		},
	});
}

export async function POST(request: Request) {
	const body = await request.json();

	const client = buildClient({ apiToken: body.datocmsApiToken });

	try {
		await Promise.all([installWebPreviewsPlugin(client)]);

		return NextResponse.json({ success: true });
	} catch (error) {
		if (error instanceof ApiError) {
			return NextResponse.json(
				{
					success: false,
					error: error.message,
					request: error.request,
					response: error.response,
				},
				{ status: 500 },
			);
		}

		return NextResponse.json({ success: false }, { status: 500 });
	}
}
