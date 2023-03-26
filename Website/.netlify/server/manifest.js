export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","robots.txt"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.9cc956e4.js","imports":["_app/immutable/entry/start.9cc956e4.js","_app/immutable/chunks/index.486ebb6f.js","_app/immutable/chunks/singletons.02b50485.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.d6f2efde.js","imports":["_app/immutable/entry/app.d6f2efde.js","_app/immutable/chunks/index.486ebb6f.js"],"stylesheets":[],"fonts":[]}},
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
