<template>
    <h1>Search Name</h1>
    <input type="search" v-model="search" />
    <p v-for="name in filteredNames" :key="name">Result - {{ name }}</p>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
    setup() {
        let search = ref("");
        let names = ref([
            "Kaungmat Thway",
            "Arkaer Shine",
            "Ye Min Htet",
            "YuYU Aye",
            "May Pwint Phoo",
            "Win War Htun",
            "Pann Pann",
        ]);
        let filteredNames = computed(() => {
            return names.value.filter((name) => {
                return name.includes(search.value);
            });
        });

        return { search, names, filteredNames };
    },
};
</script>
