<script>
// @ts-nocheck

	import img from "../lib/images/download.png";

	import DisplayWidget from '$lib/components/DisplayWidget.svelte';
    import LedViewer from '$lib/components/LedViewer.svelte';
	import StaticWidget from '$lib/components/StaticWidget.svelte';

	let json = [{"r": 0, "g": 0, "b": 0}];

	function hexToRgb(hex) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16),
		} : {
			r: 0,
			g: 0,
			b: 0
		}
	}

    function interval(duration, c1, c2) {
        return (c2-c1) / (duration)
    }

	function formatJson() {
		json = []
		dropped_data.map((data, i) => {
			console.log(data);
			let durationPeriodic = Math.floor(data.duration * 50);
			let length = data.length;
			let color = hexToRgb(data.color);
			let color2 = hexToRgb(data.color2);
			for(let y = 0; y < durationPeriodic; y++) {
				json.push({
					"r": data.type == "transition" || data.type == "transitionramp" ? Math.floor(color.r + interval(durationPeriodic, color.r, color2.r)*y) : color.r,
					"g": data.type == "transition" || data.type == "transitionramp" ? Math.floor(color.g + interval(durationPeriodic, color.g, color2.g)*y) : color.g,
					"b": data.type == "transition" || data.type == "transitionramp" ? Math.floor(color.b + interval(durationPeriodic, color.b, color2.b)*y) : color.b,
					"length": data.type == "ramp" || data.type == "transitionramp" ? Math.floor((1/durationPeriodic * (y+1)) * length) : length
				})
			} 
		})
	}

	function download() {
		formatJson();
		const filename = "5829-animation.json"

		var element = document.createElement("a");
		element.href = window.URL.createObjectURL(new Blob([JSON.stringify(json)], {type: 'text/json'}));
		element.download = filename;
		
		document.body.appendChild(element);
		element.click();

		document.body.removeChild(element);
	}

	let drop_zone;
	let dropped = [];
	let dropped_data = [];
	let dropped_in = '';
	let activeEvent = '';
	
	let originalX = '';
	let originalY = '';

    function handleDragDrop(e) {

		console.log("dropped", dropped);
		console.log("dropped_data", dropped_data);
        e.preventDefault();
        var element_type = e
            .dataTransfer
            .getData("text");
				dropped = dropped.concat(element_type);
				// dropped_data = dropped_data.concat({"duration": 0, "length": 0, "color": ""})
				dropped_data.push({"type": element_type, "duration": 1, "length": 100, "color": "#ffffff", "color2": "#ffffff"})
        dropped_in = true;
    }
	
	function handleDragStart(e) {
		e.dataTransfer.dropEffect = "move";
		e.dataTransfer
		.setData("text", e.target.getAttribute('type'));
    }

    function handleDragEnd(e) {
      dropped_in = false;
    }

    function handleTouchStart(e) {
      originalX = (e.target.offsetLeft - 10) + "px";
      originalY = (e.target.offsetTop - 10) + "px";
      activeEvent = 'start';
    }

    function handleTouchMove(e) {
    	let touchLocation = e.targetTouches[0];
    	let pageX = Math.floor((touchLocation.pageX - 50)) + "px";
    	let pageY = Math.floor((touchLocation.pageY - 50)) + "px";
    	e.target.style.position = "absolute";
    	e.target.style.left = pageX;
    	e.target.style.top = pageY;
    	activeEvent = 'move';
    }

    function handleTouchEnd(e) {
    	e.preventDefault();
    	if (activeEvent === 'move') {
      	let pageX = (parseInt(e.target.style.left) - 50);
      	let pageY = (parseInt(e.target.style.top) - 50);

      	if (detectTouchEnd(drop_zone.offsetLeft, drop_zone.offsetTop, pageX, pageY, drop_zone.offsetWidth, drop_zone.offsetHeight)) {
        	dropped = dropped.concat(e.target.id);
			dropped_data = dropped_data.concat({"type": e.target.it, "duration": 1, "length": 100, "color": "white", "color2": "white"})
        	e.target.style.position = "initial";
        	dropped_in = true;
        } else {
        	e.target.style.left = originalX;
        	e.target.style.top = originalY;
        }
      }
    }

    function detectTouchEnd(x1, y1, x2, y2, w, h) {
    	//Very simple detection here
    	if (x2 - x1 > w) 
      	return false;
    	if (y2 - y1 > h) 
      	return false;
    	return true;
    }

	let y = 0;
</script>

<svelte:head>
	<title>Led Animation Creator</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#if dropped_data.length > 0}
		<LedViewer bind:data = {dropped_data}/>
	{:else} 
		<LedViewer data = {[{"duration": 0, "length": 100, "color": "#10D513", "color2": "#10D513"}]}/>
	{/if}

	<div class = "Container">
		<div class = "Left">
			<div class = "Widgets">
				<div
					type = {"static"}
					draggable=true 
					on:dragstart={handleDragStart}
					on:dragend={handleDragEnd}
					on:touchstart={handleTouchStart}
					on:touchmove={handleTouchMove}
					on:touchend={handleTouchEnd}
				>
					<DisplayWidget title = "Static"/>
				</div>
				<div
					type = {"ramp"}
					draggable=true 
					on:dragstart={handleDragStart}
					on:dragend={handleDragEnd}
					on:touchstart={handleTouchStart}
					on:touchmove={handleTouchMove}
					on:touchend={handleTouchEnd}
				>
					<DisplayWidget title = "Ramp"/>
				</div>
				<div
					type = {"transition"}
					draggable=true 
					on:dragstart={handleDragStart}
					on:dragend={handleDragEnd}
					on:touchstart={handleTouchStart}
					on:touchmove={handleTouchMove}
					on:touchend={handleTouchEnd}
				>
					<DisplayWidget title = "Transition"/>
				</div>
				<div
					type = {"transitionramp"}
					draggable=true 
					on:dragstart={handleDragStart}
					on:dragend={handleDragEnd}
					on:touchstart={handleTouchStart}
					on:touchmove={handleTouchMove}
					on:touchend={handleTouchEnd}
				>
					<DisplayWidget title = "Transition Ramp"/>
				</div>
			</div>
			<div class = "DownloadContainer">
				<button class="DownloadButton" on:click = {download}><img class = "DownloadImage" src = {img}/></button>
			</div>
		</div>
		<div 
			on:drop={handleDragDrop} 
			bind:this={drop_zone} 
			class = "Right"
			id="drop_zone" 
			ondragover="return false"
		>
			{#each dropped as widget, i}
				<div class = "WidgetContainer">
					<button class = "Delete" on:click = {() => {dropped = dropped.slice(0, i).concat(dropped.slice(i+1)); dropped_data.splice(i, 1); dropped_data = dropped_data}}>X</button>
					<StaticWidget title= {widget} bind:duration = {dropped_data[i].duration} bind:length = {dropped_data[i].length} bind:color = {dropped_data[i].color} bind:color2 = {dropped_data[i].color2}/>
				</div>
			{/each}
		</div>
	</div>

</section>

<style>
	.Container {
		box-sizing: border-box;
		display: grid;
		grid-template-columns: 3fr  4fr;
		width: 50vw;
		border: solid 3px black;
		background-color: rgb(49, 50, 80);
		padding: 30px;
		border-radius: 50px;
		gap: 20px;
	}
	
	.Left {
		display: grid;
		grid-template-rows: 2fr 1fr;
		place-content: center;
	}

	.Widgets {
		display: flex;
		flex-direction: column;
		place-content: space-evenly;
		align-items: center;
	}

	#drop_zone {
		background-color: rgb(16, 16, 16);
		border: white 3px solid ;
		height: 200px;
		padding: 50px 20px 50px 20px;
		font-size: 19px;
		border-radius: 30px;
		overflow-y: auto;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.WidgetContainer {
		position: relative;
		border-radius: 10px;
		width: 100%;
		overflow: hidden;
		margin: 0 0 25px 0;
	}

	.Delete {
		position: absolute;
		padding: 5px;
		border-radius: 0 0 0 10px;
		width: 30px;
		height: 30px;
		border: solid 1px black;
		text-align: center;
		top: 0;
		right: 0;
		background-color: red;
	}

	.DownloadContainer {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.DownloadButton {
		outline: none;
		border: none;
		background-color: rgb(0, 213, 255);
		border-radius: 50%;
		width: 100px;
		height: 100px;
		padding: 10px;
	}

	.DownloadImage {
		width: 100%;
	}
</style>
