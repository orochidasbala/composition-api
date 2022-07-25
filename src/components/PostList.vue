<template>
    <h1>Welcome to my site</h1>
    <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post"></SinglePost>
    </div>
</template>

<script>
import SinglePost from "./SinglePost";
import { ref } from "@vue/reactivity";
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";

export default {
    components: { SinglePost },
    props: ["posts"],
    setup(props) {},
};
</script>

<style></style>
