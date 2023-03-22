<script>
// @ts-nocheck

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

	function formatJson() {
		json = []
		dropped_data.map((data) => {
			let durationPeriodic = Math.floor(data.duration * 50);
			let length = data.length;
			let color = hexToRgb(data.color);
			console.log(length)
			console.log(color)
			for(let i = 0; i < durationPeriodic; i++) {
				json.push({
					"r": color.r,
					"g": color.g,
					"b": color.b,
					"length": length
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
				dropped_data.push({"duration": 0, "length": 0, "color": ""})
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
			dropped_data = dropped_data.concat({"duration": 0, "length": 0, "color": ""})
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
	{/if}

	<div 
		on:drop={handleDragDrop} 
		bind:this={drop_zone} 
		id="drop_zone" 
		ondragover="return false"
	>
		{#each dropped as widget, i}
			<StaticWidget bind:duration = {dropped_data[i].duration} bind:length = {dropped_data[i].length} bind:color = {dropped_data[i].color}/>
		{/each}
	</div>
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
	<button on:click = {download}>Download Animation File</button>

</section>

<style>

	#drop_zone {
		background-color: #eee;
		border: #999 1px solid ;
		width: 400px;
		min-height: 200px;
		padding: 8px;
		font-size: 19px;

		display: flex;
		flex-direction: column;
		place-items: center;
		gap: 20px;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
