import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.d3a70470.js","imports":["_app/immutable/entry/start.d3a70470.js","_app/immutable/chunks/index.486ebb6f.js","_app/immutable/chunks/singletons.160f5631.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.3002b6e5.js","imports":["_app/immutable/entry/app.3002b6e5.js","_app/immutable/chunks/index.486ebb6f.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
