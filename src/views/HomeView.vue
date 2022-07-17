<template>
    <h1>Props in the setup function</h1>
    <hr />
    <div v-if="showPosts">
      <PostList :posts="posts"></PostList>
    </div>
    <hr />
    <button @click="showPosts = !showPosts">Show OR Hide PostList</button>
    <button @click="posts.pop()">Delete Last post</button>
</template>

<script>
import PostList from "../components/PostList";
import { ref } from "@vue/reactivity";

export default {
    components: { PostList },
    setup() {
        let showPosts = ref(true);
        let posts = ref([
            {
                id: 1,
                title: "Title 1",
                body: "delectus doloremque veniam optio necessitatibus laborum iure hic inventore    rem. Saepe deserunt omnis, vel, quos nostrum nihil distinctio obcaecativoluptatum quasi, nemo et unde eos itaque odit nulla? Commodi eum aspernatureos voluptate, minima, atque quos porro officiis nihil, quia possimusassumenda pariatur laudantium magni impedit fugit sint provident etdistinctio iusto non at. Nemo sed veniam accusamus commodi natus quaequisquam, blanditiis quas esse rerum obcaecati sapiente voluptatem,voluptatum eum perferendis maiores ad recusandae nobis illo eius, isteexpedita?",
            },
            {
                id: 2,
                title: "Title 2",
                body: "delectus doloremque veniam optio necessitatibus laborum iure hic inventore    rem. Saepe deserunt omnis, vel, quos nostrum nihil distinctio obcaecativoluptatum quasi, nemo et unde eos itaque odit nulla? Commodi eum aspernatureos voluptate, minima, atque quos porro officiis nihil, quia possimusassumenda pariatur laudantium magni impedit fugit sint provident etdistinctio iusto non at. Nemo sed veniam accusamus commodi natus quaequisquam, blanditiis quas esse rerum obcaecati sapiente voluptatem,voluptatum eum perferendis maiores ad recusandae nobis illo eius, isteexpedita?",
            },
        ]);

        return { posts , showPosts};
    },
};
</script>
