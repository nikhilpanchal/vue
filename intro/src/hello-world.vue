<template>
    <p>{{message}}</p>
</template>

<script type="text/javascript">
    export default {
        name: 'hello-world',
        data: function() {
            return {
                message: "Hello, World!"
            }
        }
    }
</script>

<style type="text/css">
    p {
        margin: 0 auto;
        width: 80%;
        border: 1px solid black;
        text-align: center;
    }
</style>