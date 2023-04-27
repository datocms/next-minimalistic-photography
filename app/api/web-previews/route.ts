import { NextResponse } from "next/server";
import { SchemaTypes } from "@datocms/cma-client-node";

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

function generatePreviewUrl(
	item: SchemaTypes.Item,
	itemType: SchemaTypes.ItemType,
	locale: string,
) {
	switch (itemType.attributes.api_key) {
		case "contact_page":
			return "/contact";
		case "about_page":
			return "/about";
		case "homepage":
		case "photoshoot":
			return "/";
		default:
			return null;
	}
}

export async function POST(request: Request) {
	const body = await request.json();

	const url = generatePreviewUrl(body.item, body.itemType, body.locale);

	if (!url) {
		return NextResponse.json({ previewLinks: [] });
	}

	const baseUrl = process.env.VERCEL_URL
		? // Vercel auto-populates this environment variable
		  `https://${process.env.VERCEL_URL}`
		: // Netlify auto-populates this environment variable
		  process.env.URL;

	const previewLinks = [
		{
			label: "Published version",
			url: new URL(url, baseUrl).toString(),
		},
	];

	return NextResponse.json({ previewLinks });
}
