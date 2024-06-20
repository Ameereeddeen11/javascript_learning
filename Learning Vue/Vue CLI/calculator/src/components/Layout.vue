<template>
    <div class="container">
        <div class="calculator">
            <div class="row">
                <div class="display">{{ values }}</div>
                <the-button display-value="C"></the-button>
            </div>
            <calculator-row
                v-for="(row, index) of rows"
                :key="'row' + (index + 1)"
                :buttons="row"/>
        </div>
    </div>
</template>

<script>
import CalculatorRow from '@/components/CalculatorRow.vue'
export default {
    name: 'TheLayout',
    data() {
        return {
            values: '0',
            rows: [
                ['7', '8', '9', '/'],
                ['4', '5', '6', '*'],
                ['1', '2', '3', '-'],
                ['0', '.', '=', '+']
            ]
        }
    },
    components: {
        CalculatorRow
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