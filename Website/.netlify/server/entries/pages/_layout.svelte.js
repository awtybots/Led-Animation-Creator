import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const github = "/_app/immutable/assets/github.1ea8d62e.svg";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-1s211ra.svelte-1s211ra{display:flex;justify-content:space-between}.corner.svelte-1s211ra.svelte-1s211ra{width:3em;height:3em;padding:0 1rem 0 1rem}.corner.svelte-1s211ra a.svelte-1s211ra{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-1s211ra h1.svelte-1s211ra{color:white}.corner.svelte-1s211ra img.svelte-1s211ra{width:2em;height:2em;object-fit:contain}nav.svelte-1s211ra.svelte-1s211ra{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-1s211ra.svelte-1s211ra{width:2em;height:3em;display:block}path.svelte-1s211ra.svelte-1s211ra{fill:var(--background)}ul.svelte-1s211ra.svelte-1s211ra{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1s211ra.svelte-1s211ra{position:relative;height:100%}li[aria-current='page'].svelte-1s211ra.svelte-1s211ra::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--color-theme-1)}nav.svelte-1s211ra a.svelte-1s211ra{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-1s211ra.svelte-1s211ra:hover{color:var(--color-theme-1)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="svelte-1s211ra"><div class="corner svelte-1s211ra"><h1 class="svelte-1s211ra">Awtybots 5829</h1></div>
	<nav class="svelte-1s211ra"><svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1s211ra"><path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" class="svelte-1s211ra"></path></svg>
		<ul class="svelte-1s211ra"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="svelte-1s211ra"><a href="/" class="svelte-1s211ra">Home</a></li></ul>
		<svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-1s211ra"><path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" class="svelte-1s211ra"></path></svg></nav>

	<div class="corner svelte-1s211ra"><a href="https://github.com/awtybots/Led-Animation-Creator" class="svelte-1s211ra"><img${add_attribute("src", github, 0)} alt="GitHub" class="svelte-1s211ra"></a></div>
</header>`;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-195cvbj{display:flex;flex-direction:column;min-height:100vh}main.svelte-195cvbj{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-195cvbj">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="svelte-195cvbj">${slots.default ? slots.default({}) : ``}</main>
</div>`;
});
export {
  Layout as default
};
