<template>
    <div class="container">
        <div class="calculator">
            <div class="row">
                <div class="display">value</div>
            </div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheLayout'
}
</script>

<style>
.display {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: antiquewhite;
    padding: .5em;
    font-size: 1.5em;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightblue;
    height: 100vh;
    widows: 100vw;
}

.calculator {
    border: 1px solid #000;
    border-radius: 4px;
    overflow: hidden;
}

.row {
    display: flex;
    justify-content: center;
    height: 60px;
    width: 240px;
}

</style>