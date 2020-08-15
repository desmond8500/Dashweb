<template>
    <div class="card">
        <div class="card-body p-3 text-center">
            <div class="text-right" :class="box.color">
                {{box.percentage}}
                <i :class="box.icon"></i>
            </div>
            <div class="h1 m-0">{{box.number}}</div>
            <div class="text-muted mb-4">{{box.name}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['box']
}
</script>

<style>

</style>