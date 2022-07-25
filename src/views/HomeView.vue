<template>
    <div v-if="posts.length > 0">
        <PostList :posts="posts"></PostList>
    </div>
    <div v-else>loading.....</div>
</template>

<script>
import PostList from "../components/PostList";
import { ref } from "@vue/reactivity";
import getPosts from "../composable/getPosts";

export default {
    components: { PostList },
    setup() {
        // composable function
        let { posts, error, load } = getPosts();
        load();
        return { posts, error };
    },
};
</script>
