import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";

const http = httpRouter();

/**
 * Serve images from Convex storage.
 * GET /getImage?storageId=<id>
 */
http.route({
	path: "/getImage",
	method: "GET",
	handler: httpAction(async (ctx, request) => {
		const url = new URL(request.url);
		const storageId = url.searchParams.get("storageId");

		if (!storageId) {
			return new Response("Missing storageId parameter", { status: 400 });
		}

		const blob = await ctx.storage.get(storageId as any);
		if (!blob) {
			return new Response("Image not found", { status: 404 });
		}

		return new Response(blob, {
			headers: {
				"Cache-Control": "public, max-age=31536000, immutable",
			},
		});
	}),
});

export default http;
