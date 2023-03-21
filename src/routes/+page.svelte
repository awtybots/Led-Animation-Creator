<script>
// @ts-nocheck

	import DisplayWidget from '$lib/components/DisplayWidget.svelte';
	import StaticWidget from '$lib/components/StaticWidget.svelte';


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
				dropped_data = dropped_data.concat({})
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
			dropped_data = dropped_data.concat({})
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
</script>

<svelte:head>
	<title>Led Animation Creator</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

	<div 
		on:drop={handleDragDrop} 
		bind:this={drop_zone} 
		id="drop_zone" 
		ondragover="return false"
	>
	{#each dropped as widget, i}
		{widget}
		<StaticWidget/>
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
		<DisplayWidget Title = "Static"/>
	</div>
</section>

<style>

	#drop_zone {
		background-color: #eee;
		border: #999 1px solid ;
		width: 280px;
		height: 200px;
		padding: 8px;
		font-size: 19px;
	}

	.objects {
		display: inline-block;
		background-color: #FFF3CC;
		border: #DFBC6A 1px solid;
		width: 50px;
		height: 50px;
		margin: 10px;
		padding: 8px;
		font-size: 18px;
		text-align: center;
		box-shadow: 2px 2px 2px #999;
		cursor: move;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
