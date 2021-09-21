<template>
    <div>{{state.gh}}</div>
</template>

<script>
import { defineComponent, onMounted, reactive } from "@vue/runtime-core";
import { getUserInformations } from './GithubService';

export default defineComponent({
    name: "GitHub",
    props: {
        username: { type: String, default: "romain325" },
    },
    setup (props) {
        const state = reactive({gh: null});

        onMounted(async () => {state.gh = await getUserInformations(props.username);})

        return {
            state,
        };
    }
});
</script>