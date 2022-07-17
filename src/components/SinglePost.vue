<template>
    <h2>{{post.title}}</h2>
    <p>{{bodyIntro}}</p>
</template>

<script>
import { computed } from '@vue/runtime-core'

export default {
    props: ['post'],
    setup(props){
        let bodyIntro = computed(()=>{
            return props.post.body.substring(0, 100) + "...see more"
        })
        return {bodyIntro}
    }
}
</script>

<style>

</style>