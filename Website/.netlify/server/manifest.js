export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ee33eae0.js","imports":["_app/immutable/entry/start.ee33eae0.js","_app/immutable/chunks/index.486ebb6f.js","_app/immutable/chunks/singletons.7db46990.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.117b49cd.js","imports":["_app/immutable/entry/app.117b49cd.js","_app/immutable/chunks/index.486ebb6f.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
