<template>
    <div class="calculator-button">{{ displayValue }}</div>
</template>

<script>
export default {
    name: 'TheButton',
    props: {
        displayValue: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
.calculator-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .75em;
  font-size: 1.5rem;
  font-weight: bold;
  flex: 0 0 auto;
  width: 60px;
  cursor: pointer;
  transition: all .3s ease-in-out;
}
.calculator-button:active {
  transform: scale(.85);
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, .15)
}
.calculator-button:hover {
  background: #F2EDCF;
}
</style>