<script>
// @ts-nocheck

    import img from '../images/play-icon-white.png'

    export let data;
    let x = "";
    let y = 0;
    let z = 0;
    let timeSum = 0;

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

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b); 
    }

    function interval(duration, c1, c2) {
        return (c2-c1) / (duration * 50)
    }

    function doSetTimeout(i, timeWait, type) {
        setTimeout(function() {
            if (type == "ramp"){
                z = i
            } else if (type == "static") {
                y = i;
            } else if (type == "transition") {
                x = i;
            } else if (type == "transitionramp") {
                z = i.ramp
                x = i.transition
            }
        }, timeWait);
    }

    function doSetTimeoutRamp(i, timeSum) {
        setTimeout(function() {
            let localTimeSum = 0;
            y = i;
            for(let j = 0; j < data[i].duration * 50; j++) {
                doSetTimeout(1/(data[i].duration * 50) * (j+1), data[i].duration*1000 / 50 + localTimeSum, "ramp") //!
                localTimeSum = localTimeSum/1.0 + 1000 / 50;
            }
        }, timeSum)
    }

    function doSetTimeoutTransition(i, timeSum) {
        setTimeout(function() {
            let localTimeSum = 0;
            y = i;
            for(let j=0; j < data[i].duration * 50; j++) {
                doSetTimeout(findRGBValues(j, data[i].duration, data[i].color, data[i].color2), data[i].duration* 1000 / 50 + localTimeSum, "transition"); //!
                localTimeSum = localTimeSum/1.0 + 1000 / 50;
            }
        }, timeSum)
    }

    function doSetTimeoutTransitionRamp(i, timeSum) {
        setTimeout(function() {
            let localTimeSum = 0;
            y = i;
            for(let j=0; j < data[i].duration * 50; j++) {
                console.log("HI")
                doSetTimeout({ramp: 1/(data[i].duration * 50) * (j+1), transition: findRGBValues(j, data[i].duration, data[i].color, data[i].color2)}, data[i].duration* 1000 / 50 + localTimeSum, "transitionramp"); //!
                localTimeSum = localTimeSum/1.0 + 1000 / 50;
            }
        }, timeSum)
    }

    function findRGBValues(i, duration, color1, color2) {
        let color1rgb = hexToRgb(color1)
        let color2rgb = hexToRgb(color2);
        let rinterval = interval(duration, color1rgb.r, color2rgb.r);
        let ginterval = interval(duration, color1rgb.g, color2rgb.g);
        let binterval = interval(duration, color1rgb.b, color2rgb.b);
        let mixedcolorrgb = {
            r: Math.floor(color1rgb.r + rinterval*i),
            g: Math.floor(color1rgb.g + ginterval*i),
            b: Math.floor(color1rgb.b + binterval*i)
        }
        return rgbToHex(mixedcolorrgb.r, mixedcolorrgb.g, mixedcolorrgb.b);
    }

    function playAnimation(){
        try {
            var id = window.setTimeout(function() {}, 0);
            while (id--) {
                window.clearTimeout(id); // will do nothing if no timeout with id is present
            }
            y = 0;
            z = 0;
            timeSum = 0
            for(let i = 0; i < data.length; i++) {
                if(data[i].type == "static"){
                    doSetTimeout(i, timeSum, data[i].type) 
                } else if (data[i].type == "ramp") {
                    doSetTimeoutRamp(i, timeSum);
                } else if (data[i].type == "transition"){
                    doSetTimeoutTransition(i, timeSum);
                } else {
                    doSetTimeoutTransitionRamp(i, timeSum)
                }
                timeSum = timeSum/1.0 + data[i].duration*1000;
            }
        } catch(e){

        }
}

</script>

<!-- svelte-ignore non-top-level-reactive-declaration -->
<div class = "Container">
    <button class = "PlayButton" on:click={() => playAnimation()}><img class = "PlayImage" src = {img}/></button>
    <div class = "Viewer">
        <!-- <div style="background-color: {data[y].color}" class = "Percent"></div> -->
        <div style = "background: linear-gradient(90deg, {data[y] != undefined ? data[y].type == "transition" || data[y].type == "transitionramp" ? x : data[y].color : "black"} 0%, {data[y] != undefined ? data[y].type == "transition" || data[y].type == "transitionramp" ? x : data[y].color : "black"} {data[y] != undefined ? data[y].type == "ramp" || data[y].type == "transitionramp" ? data[y].length * z: data[y].length : 0}%, rgba(0,0,0,1) {data[y] != undefined ? data[y].type == "ramp" || data[y].type == "transitionramp" ? data[y].length * z : data[y].length : 0}%); box-shadow: inset 0 0 12px 12px #2D2E39, inset 0 0 3px 2px #2D2E39;" class = "Percent"></div>
    </div>
</div>

<style>
    .Container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .Viewer {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Percent {
        position: relative;
        background-color: black;
        width: 50vw;
        height: 100px;
        border-radius: 10px;
    }

    .Percent::before {
        content: '';
        display: block;
        position: absolute;
        width: Calc(100% - 35px);
        height: Calc(100% - 35px);
        top: 15.5px;
        left: 14.5px;
        border: 3px solid black;
        border-radius: 10px;
    }

    .PlayButton {
        position: relative;
        border-radius: 50%;
        outline: none;
        border: none;
        width: 100px;
        background-color: transparent;
        transition: 100ms;
    }

    .PlayButton:hover {
        transform: scale(1.05);
    }
    
    .PlayButton:active {
        background-color: black;
        box-shadow: inset 0 0 12px 12px #2D2E39, inset 0 0 3px 2px #2D2E39;
    }

    .PlayImage {
        width: 100%;
    }
</style>