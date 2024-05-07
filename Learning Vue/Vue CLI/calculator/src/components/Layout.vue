<template>
    <div class="container">
        <div class="calculator">
            <div class="row">
                <div class="display">{{ values }}</div>
                <the-button display-value="F"></the-button>
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
    name: 'TheLayout',
    data() {
        return {
            values: '0'
        }
    }
}
</script>

<style>
.display {
    flex: 1;
    font-size: 1.5rem;
    padding: .5em;
    display: flex;
    align-items: center;
    background: #DEF7EB;
    justify-content: flex-end;
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