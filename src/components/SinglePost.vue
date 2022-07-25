<template>
    <h3>{{ post.title }}</h3>
    <p>{{ bodyIntro }}</p>
</template>

<script>
import { computed } from "@vue/runtime-core";

export default {
    props: ["post"],
    setup(props) {
        let bodyIntro = computed(() => {
            return props.post.body.substring(0, 100);
        });
        return { bodyIntro };
    },
};
</script>

<style></style>
