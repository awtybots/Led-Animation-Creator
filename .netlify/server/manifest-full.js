export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.70ef2f86.js","imports":["_app/immutable/entry/start.70ef2f86.js","_app/immutable/chunks/index.486ebb6f.js","_app/immutable/chunks/singletons.0d1568ca.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.f97c2432.js","imports":["_app/immutable/entry/app.f97c2432.js","_app/immutable/chunks/index.486ebb6f.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
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
};
