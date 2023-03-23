<script>
// @ts-nocheck

    export let data;
    let y = 0;
    let z = 0;
    let timeSum = 0;

    function doSetTimeout(i, timeWait, isRamp) {
        setTimeout(function() {
            if(isRamp){
                z = i
            } else {
                y = i;
            }
        }, timeWait);
    }

    function doSetTimeout2(i, timeSum) {
        setTimeout(function() {
            let localTimeSum = 0
            y = i;
            for(let j = 0; j < (data[i].duration) * 50; j++) {
                doSetTimeout(1/(data[i].duration * 50) * (j+1), data[i].duration*1000 / 50 + localTimeSum, true) //!
                localTimeSum = localTimeSum/1.0 + 1000 / 50;
            }
        }, timeSum)
    }

    function playAnimation(){
        var id = window.setTimeout(function() {}, 0);
        while (id--) {
            window.clearTimeout(id); // will do nothing if no timeout with id is present
}
        y = 0;
        z = 0;
        timeSum = 0
        for(let i = 0; i < data.length; i++) {
            if(data[i].type == "static") {
                doSetTimeout(i, timeSum, false);
                timeSum = timeSum/1.0 + data[i].duration*1000;
            } else {
                doSetTimeout2(i, timeSum)
                timeSum = timeSum/1.0 + data[i].duration*1000;
                z = 0;
            }
    }
}

</script>

<!-- svelte-ignore non-top-level-reactive-declaration -->
<div>
    <button on:click={() => playAnimation()}>Play</button>
    <div class = "Viewer">
        <!-- <div style="background-color: {data[y].color}" class = "Percent"></div> -->
        <div style = "background: linear-gradient(90deg, {data[y].color} 0%, {data[y].color} {data[y].type == "ramp" ? data[y].length * z: data[y].length}%, rgba(0,0,0,1) {data[y].type == "ramp" ? data[y].length * z : data[y].length}%); box-shadow: inset 0 0 12px 12px #2D2E39, inset 0 0 3px 2px #2D2E39;" class = "Percent"></div>
    </div>
</div>

<style>
    .Viewer {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 500ms;
    }

    .Percent {
        position: relative;
        background-color: black;
        width: 1000px;
        height: 100px;
        transition: 500ms;
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
</style>