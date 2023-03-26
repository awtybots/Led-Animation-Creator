import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","robots.txt"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.9cc956e4.js","imports":["_app/immutable/entry/start.9cc956e4.js","_app/immutable/chunks/index.486ebb6f.js","_app/immutable/chunks/singletons.02b50485.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.d6f2efde.js","imports":["_app/immutable/entry/app.d6f2efde.js","_app/immutable/chunks/index.486ebb6f.js"],"stylesheets":[],"fonts":[]}},
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
