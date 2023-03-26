export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","robots.txt"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.a2ee4359.js","imports":["_app/immutable/entry/start.a2ee4359.js","_app/immutable/chunks/index.486ebb6f.js","_app/immutable/chunks/singletons.a7eed481.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.d7cc0996.js","imports":["_app/immutable/entry/app.d7cc0996.js","_app/immutable/chunks/index.486ebb6f.js"],"stylesheets":[],"fonts":[]}},
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
