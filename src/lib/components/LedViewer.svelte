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
        <div style = "background: linear-gradient(90deg, {data[y].color} 0%, {data[y].color} {data[y].length}%, rgba(0,0,0,1) {data[y].length}%); box-shadow: inset 0 0 12px 12px #2D2E39, inset 0 0 3px 2px #2D2E39;" class = "Percent"></div>
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