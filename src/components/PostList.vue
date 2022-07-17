<template>
  <h1>Post List</h1>
    <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post"></SinglePost>
    </div>
</template>

<script>
import SinglePost from './SinglePost'
import { ref } from '@vue/reactivity'
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";

export default {
  components: { SinglePost },
    props: [
        "posts"
    ],
    setup(props){
        onMounted(() => console.log("mounted"));
        onUnmounted(() => console.log("unmounted"));
        onUpdated(() => console.log("updated"));
    }
}
</script>

<style>

</style>