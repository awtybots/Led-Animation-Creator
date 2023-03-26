import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, f as each } from "../../chunks/index.js";
const img$1 = "/_app/immutable/assets/download.1a15b5b8.png";
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
const img = "/_app/immutable/assets/play-icon-white.848dc977.png";
const LedViewer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".Container.svelte-1c8m9f4{display:flex;flex-direction:column;align-items:center}.Viewer.svelte-1c8m9f4{display:flex;justify-content:center;align-items:center}.Percent.svelte-1c8m9f4{position:relative;background-color:black;width:50vw;height:100px;border-radius:10px}.Percent.svelte-1c8m9f4::before{content:'';display:block;position:absolute;width:Calc(100% - 35px);height:Calc(100% - 35px);top:15.5px;left:14.5px;border:3px solid black;border-radius:10px}.PlayButton.svelte-1c8m9f4{position:relative;border-radius:50%;outline:none;border:none;width:100px;background-color:transparent;transition:100ms}.PlayButton.svelte-1c8m9f4:hover{transform:scale(1.05)}.PlayButton.svelte-1c8m9f4:active{background-color:black;box-shadow:inset 0 0 12px 12px #2D2E39, inset 0 0 3px 2px #2D2E39}.PlayImage.svelte-1c8m9f4{width:100%}",
  map: null
};
const LedViewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let x = "";
  let y = 0;
  let z = 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$2);
  return `
<div class="Container svelte-1c8m9f4"><button class="PlayButton svelte-1c8m9f4"><img class="PlayImage svelte-1c8m9f4"${add_attribute("src", img, 0)}></button>
    <div class="Viewer svelte-1c8m9f4">
        <div style="${"background: linear-gradient(90deg, " + escape(
    data[y] != void 0 ? data[y].type == "transition" || data[y].type == "transitionramp" ? x : data[y].color : "black",
    true
  ) + " 0%, " + escape(
    data[y] != void 0 ? data[y].type == "transition" || data[y].type == "transitionramp" ? x : data[y].color : "black",
    true
  ) + " " + escape(
    data[y] != void 0 ? data[y].type == "ramp" || data[y].type == "transitionramp" ? data[y].length * z : data[y].length : 0,
    true
  ) + "%, rgba(0,0,0,1) " + escape(
    data[y] != void 0 ? data[y].type == "ramp" || data[y].type == "transitionramp" ? data[y].length * z : data[y].length : 0,
    true
  ) + "%); box-shadow: inset 0 0 12px 12px #2D2E39, inset 0 0 3px 2px #2D2E39;"}" class="Percent svelte-1c8m9f4"></div></div>
</div>`;
});
const StaticWidget_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".Widget.svelte-1iv4nvq{border:white;background-color:#CC3273;height:95px;border-radius:10px;overflow:hidden}.Title.svelte-1iv4nvq{display:flex;justify-content:center;align-items:center;font-size:45px;font-weight:bold;height:60%;background-color:#CC3273}.Buttons.svelte-1iv4nvq{display:flex;justify-content:space-between}.Button.svelte-1iv4nvq{width:100%;height:100%}.TextInput.svelte-1iv4nvq{outline:none;border:none;width:100%;height:40px}.ColorInput.svelte-1iv4nvq{-webkit-appearance:none;border:none;width:100%;height:40px}.ColorInput.svelte-1iv4nvq::-webkit-color-swatch-wrapper{padding:0}.ColorInput.svelte-1iv4nvq::-webkit-color-swatch{border:none}",
  map: null
};
const StaticWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { duration } = $$props;
  let { color } = $$props;
  let { color2 } = $$props;
  let { length } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.color2 === void 0 && $$bindings.color2 && color2 !== void 0)
    $$bindings.color2(color2);
  if ($$props.length === void 0 && $$bindings.length && length !== void 0)
    $$bindings.length(length);
  $$result.css.add(css$1);
  return `<div class="Widget svelte-1iv4nvq"><div class="Title svelte-1iv4nvq">${escape(title)}</div>
    <div class="Buttons svelte-1iv4nvq"><div class="Button svelte-1iv4nvq"><input class="TextInput svelte-1iv4nvq"${add_attribute("value", duration, 0)}></div>
        <div class="Button svelte-1iv4nvq"><input class="TextInput svelte-1iv4nvq"${add_attribute("value", length, 0)}></div>
        <div class="Button svelte-1iv4nvq"><input class="ColorInput svelte-1iv4nvq" type="color"${add_attribute("value", color, 0)}></div>
        ${title === "transition" || title === "transitionramp" ? `<div class="Button svelte-1iv4nvq"><input class="ColorInput svelte-1iv4nvq" type="color"${add_attribute("value", color2, 0)}></div>` : ``}</div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".Container.svelte-18mlgzm{box-sizing:border-box;display:grid;grid-template-columns:3fr  4fr;width:50vw;border:solid 3px black;background-color:rgb(49, 50, 80);padding:30px;border-radius:50px;gap:20px}.Left.svelte-18mlgzm{display:grid;grid-template-rows:2fr 1fr;place-content:center}.Widgets.svelte-18mlgzm{display:flex;flex-direction:column;place-content:space-evenly;align-items:center}#drop_zone.svelte-18mlgzm{background-color:rgb(16, 16, 16);border:white 3px solid ;height:200px;padding:50px 20px 50px 20px;font-size:19px;border-radius:30px;overflow-y:auto}section.svelte-18mlgzm{display:flex;flex-direction:column;justify-content:center;align-items:center}.WidgetContainer.svelte-18mlgzm{position:relative;border-radius:10px;width:100%;overflow:hidden;margin:0 0 25px 0}.Delete.svelte-18mlgzm{position:absolute;padding:5px;border-radius:0 0 0 10px;width:30px;height:30px;border:solid 1px black;text-align:center;top:0;right:0;background-color:red}.DownloadContainer.svelte-18mlgzm{display:flex;justify-content:center;align-items:center}.DownloadButton.svelte-18mlgzm{outline:none;border:none;background-color:rgb(0, 213, 255);border-radius:50%;width:100px;height:100px;padding:10px}.DownloadImage.svelte-18mlgzm{width:100%}",
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
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-198p1t9_START -->${$$result.title = `<title>LED Animation Creator</title>`, ""}<meta name="description" content="Awtybots 5829's LED creator web app"><!-- HEAD_svelte-198p1t9_END -->`, ""}

<section class="svelte-18mlgzm">${dropped_data.length > 0 ? `${validate_component(LedViewer, "LedViewer").$$render(
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
            "color": "#10D513",
            "color2": "#10D513"
          }
        ]
      },
      {},
      {}
    )}`}

	<div class="Container svelte-18mlgzm"><div class="Left svelte-18mlgzm"><div class="Widgets svelte-18mlgzm"><div${add_attribute("type", "static", 0)} draggable="true">${validate_component(DisplayWidget, "DisplayWidget").$$render($$result, { title: "Static" }, {}, {})}</div>
				<div${add_attribute("type", "ramp", 0)} draggable="true">${validate_component(DisplayWidget, "DisplayWidget").$$render($$result, { title: "Ramp" }, {}, {})}</div>
				<div${add_attribute("type", "transition", 0)} draggable="true">${validate_component(DisplayWidget, "DisplayWidget").$$render($$result, { title: "Transition" }, {}, {})}</div>
				<div${add_attribute("type", "transitionramp", 0)} draggable="true">${validate_component(DisplayWidget, "DisplayWidget").$$render($$result, { title: "Transition Ramp" }, {}, {})}</div></div>
			<div class="DownloadContainer svelte-18mlgzm"><button class="DownloadButton svelte-18mlgzm"><img class="DownloadImage svelte-18mlgzm"${add_attribute("src", img$1, 0)}></button></div></div>
		<div class="Right svelte-18mlgzm" id="drop_zone" ondragover="return false"${add_attribute("this", drop_zone, 0)}>${each(dropped, (widget, i) => {
      return `<div class="WidgetContainer svelte-18mlgzm"><button class="Delete svelte-18mlgzm">X</button>
					${validate_component(StaticWidget, "StaticWidget").$$render(
        $$result,
        {
          title: widget,
          duration: dropped_data[i].duration,
          length: dropped_data[i].length,
          color: dropped_data[i].color,
          color2: dropped_data[i].color2
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
          },
          color2: ($$value) => {
            dropped_data[i].color2 = $$value;
            $$settled = false;
          }
        },
        {}
      )}
				</div>`;
    })}</div></div>

</section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
