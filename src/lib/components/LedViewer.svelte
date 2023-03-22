<script>
// @ts-nocheck

    export let data;
    let y = 0;
    let timeSum = 0;

    function doSetTimeout(i, timeWait) {
        setTimeout(function() {
            y = i;
            console.log(data[i-1].duration * 1000 + timeSum * 1000)
        }, timeWait);
    }

    function playAnimation(){
        y = 0
        timeSum = 0
        for(let i = 1; i < data.length; i++) {
            doSetTimeout(i, data[i-1].duration*1000 + timeSum)
            timeSum = timeSum/1.0 + data[i-1].duration*1000
        }
    }
</script>

<div>
    <button on:click={() => playAnimation()}>Play</button>
    <div class = "Viewer">
        <!-- <div style="background-color: {data[y].color}" class = "Percent"></div> -->
        <div style = "background: linear-gradient(90deg, {data[y].color} 0%, {data[y].color} {data[y].length}%, rgba(0,0,0,1) {data[y].length}%)" class = "Percent"></div>
    </div>
</div>

<style>
    .Viewer {
        display: flex;
    }

    .Percent {
        background-color: black;
        height: 100px;
        width: 1000px;
    }
</style>