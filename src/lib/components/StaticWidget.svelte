<script>
// @ts-nocheck

    export let duration;
    export let color;
    export let length;

</script>

<div class = "Widget">
    <div class = "Title">Fade</div>
    <div class = "Buttons">
        <div class = "Button"><input class = "TextInput" bind:value={duration} /></div>
        <div class = "Button"><input class = "TextInput" bind:value={length} /></div>
        <div class = "Button"><input class = "ColorInput" bind:value={color} type="color"/></div>
    </div>
</div>

<style>
    .Widget {
        border: 5px white;
        background-color: #CC3273;
        width: 300px;
        height: 95px;
        border-radius: 10px;
        overflow: hidden;
    }

    .Title {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 45px;
        font-weight: bold;

        Height: 60%;
        background-color: #CC3273;
    }

    .Buttons {
        display: flex;
        justify-content: space-between;
    }

    .Button {
        width: 100%;
        height: 100%;
    }

    .TextInput {
        outline: none;
        border: none;
        width: 100%;
    }

    .ColorInput {
        outline: none;
        border: none;
        width: 100%;
    }
</style>