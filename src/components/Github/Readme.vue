<template>
    <div v-if="!state.loaded">Loading</div>
    <div v-if="state.loaded" class="container" v-html="state.readme"></div>
</template>

<script>
import { defineComponent, onMounted, reactive } from "@vue/runtime-core";
import { getUserProfileReadme } from './GithubService';

export default defineComponent({
    name: "ReadMe",
    props: {
        username: { type: String, default: "romain325" },
    },
    setup (props) {
        const state = reactive({readme: null, loaded: false});

        onMounted(async () => {state.readme = await getUserProfileReadme(props.username); state.loaded = true;})

        return {
            state,
        };
    }
});
</script>
