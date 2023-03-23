import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, f as each } from "../../chunks/index.js";
const DisplayWidget_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".Widget.svelte-1qup60x{border:5px white;background-color:#CC3273;width:125px;height:50px;border-radius:10px;overflow:hidden;display:flex;justify-content:center;align-items:center;font-size:25px;font-weight:bold;color:white}",
  map: null
};
const DisplayWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$3);
  return `<div class="Widget svelte-1qup60x"><div class="">${escape(title)}</div>
    </div>`;
});
const LedViewer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".Viewer.svelte-1jxr940{display:flex;justify-content:center;align-items:center;transition:500ms}.Percent.svelte-1jxr940{position:relative;background-color:black;width:1000px;height:100px;transition:500ms;border-radius:10px}.Percent.svelte-1jxr940::before{content:'';display:block;position:absolute;width:Calc(100% - 35px);height:Calc(100% - 35px);top:15.5px;left:14.5px;border:3px solid black;border-radius:10px}",
  map: null
};
const LedViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let y = 0;
  let z = 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$2);
  return `
<div><button>Play</button>
    <div class="Viewer svelte-1jxr940">
        <div style="${"background: linear-gradient(90deg, " + escape(data[y] != void 0 ? data[y].color : "black", true) + " 0%, " + escape(data[y] != void 0 ? data[y].color : "black", true) + " " + escape(
    data[y] != void 0 ? data[y].type == "ramp" ? data[y].length * z : data[y].length : 0,
    true
  ) + "%, rgba(0,0,0,1) " + escape(
    data[y] != void 0 ? data[y].type == "ramp" ? data[y].length * z : data[y].length : 0,
    true
  ) + "%); box-shadow: inset 0 0 12px 12px #2D2E39, inset 0 0 3px 2px #2D2E39;"}" class="Percent svelte-1jxr940"></div></div>
</div>`;
});
const StaticWidget_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".Widget.svelte-tooj6s{border:white;background-color:#CC3273;width:300px;height:95px;border-radius:10px;overflow:hidden}.Title.svelte-tooj6s{display:flex;justify-content:center;align-items:center;font-size:45px;font-weight:bold;height:60%;background-color:#CC3273}.Buttons.svelte-tooj6s{display:flex;justify-content:space-between}.Button.svelte-tooj6s{width:100%;height:100%}.TextInput.svelte-tooj6s{outline:none;border:none;width:100%;height:40px}.ColorInput.svelte-tooj6s{-webkit-appearance:none;border:none;width:100%;height:40px}.ColorInput.svelte-tooj6s::-webkit-color-swatch-wrapper{padding:0}.ColorInput.svelte-tooj6s::-webkit-color-swatch{border:none}",
  map: null
};
const StaticWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { duration } = $$props;
  let { color } = $$props;
  let { length } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.length === void 0 && $$bindings.length && length !== void 0)
    $$bindings.length(length);
  $$result.css.add(css$1);
  return `<div class="Widget svelte-tooj6s"><div class="Title svelte-tooj6s">${escape(title)}</div>
    <div class="Buttons svelte-tooj6s"><div class="Button svelte-tooj6s"><input class="TextInput svelte-tooj6s"${add_attribute("value", duration, 0)}></div>
        <div class="Button svelte-tooj6s"><input class="TextInput svelte-tooj6s"${add_attribute("value", length, 0)}></div>
        <div class="Button svelte-tooj6s"><input class="ColorInput svelte-tooj6s" type="color"${add_attribute("value", color, 0)}></div></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#drop_zone.svelte-ntwcyo{background-color:rgb(16, 16, 16);border:white 3px solid ;width:400px;min-height:200px;padding:50px 20px 50px 20px;font-size:19px;border-radius:30px;display:flex;flex-direction:column;place-items:center;gap:20px}section.svelte-ntwcyo{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6}.Widget.svelte-ntwcyo{position:relative;border-radius:10px;overflow:hidden}.Delete.svelte-ntwcyo{position:absolute;padding:5px;border-radius:0 0 0 10px;width:30px;height:30px;border:solid 1px black;text-align:center;top:0;right:0;background-color:red}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let drop_zone;
  let dropped = [];
  let dropped_data = [];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1bk068h_START -->${$$result.title = `<title>Led Animation Creator</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-1bk068h_END -->`, ""}

<section class="svelte-ntwcyo">${dropped_data.length > 0 ? `${validate_component(LedViewer, "LedViewer").$$render(
      $$result,
      { data: dropped_data },
      {
        data: ($$value) => {
          dropped_data = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(LedViewer, "LedViewer").$$render(
      $$result,
      {
        data: [
          {
            "duration": 0,
            "length": 100,
            "color": "green"
          }
        ]
      },
      {},
      {}
    )}`}

	<div id="drop_zone" ondragover="return false" class="svelte-ntwcyo"${add_attribute("this", drop_zone, 0)}>${each(dropped, (widget, i) => {
      return `<div class="Widget svelte-ntwcyo"><button class="Delete svelte-ntwcyo">X</button>
				${validate_component(StaticWidget, "StaticWidget").$$render(
        $$result,
        {
          title: widget,
          duration: dropped_data[i].duration,
          length: dropped_data[i].length,
          color: dropped_data[i].color
        },
        {
          duration: ($$value) => {
            dropped_data[i].duration = $$value;
            $$settled = false;
          },
          length: ($$value) => {
            dropped_data[i].length = $$value;
            $$settled = false;
          },
          color: ($$value) => {
            dropped_data[i].color = $$value;
            $$settled = false;
          }
        },
        {}
      )}
			</div>`;
    })}</div>
	<div${add_attribute("type", "static", 0)} draggable="true">${validate_component(DisplayWidget, "DisplayWidget").$$render($$result, { title: "Static" }, {}, {})}</div>
	<div${add_attribute("type", "ramp", 0)} draggable="true">${validate_component(DisplayWidget, "DisplayWidget").$$render($$result, { title: "Ramp" }, {}, {})}</div>
	<button>Download Animation File</button>

</section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
