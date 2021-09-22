<template>
    <div v-if="!state.loaded">Loading</div>
    <div v-if="state.loaded" class="container">
        <div class="row">
            <div class="col-4">
                <figure class=figure><img :src="state.gh.avatar_url" class="figure-img img-fluid rounded" /><figcaption class="figure-caption">{{state.gh.login}}</figcaption></figure>
            </div>
            <div class="col-8 d-flex flex-column align-items-start">
                <h3>{{state.gh.name}}</h3>
                <a v-if="state.gh.blog" :href="state.gh.blog">{{state.gh.blog}}</a>
                <a v-if="state.gh.email" :href="'mailto:' + state.gh.email" >Send me a mail</a>
                <p v-if="state.gh.location">{{state.gh.location}}</p>
                <p v-if="state.gh.hireable">{{hireableMessage}}</p>
            </div>
        </div>
        <div class="row justify-content-center">
            <h5>{{state.gh.bio}}</h5>
        </div>
        <div class="row stats">
            <hr>
            <ul class="status">
                <li>{{state.gh.followers}} followers</li>
                <li>{{state.gh.following}} following</li>
                <li>{{state.gh.public_repos}} repos</li>
                <li>{{state.gh.public_gists}} gists</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, reactive } from "@vue/runtime-core";
import { getUserInformations } from './GithubService';

export default defineComponent({
    name: "GitHub",
    props: {
        username: { type: String, default: "romain325" },
        hireableMessage: { type: String, default: "Open to hiring" },
    },
    setup (props) {
        const state = reactive({gh: null, loaded: false});

        onMounted(async () => {state.gh = await getUserInformations(props.username); state.loaded = true;})

        return {
            state,
        };
    }
});
</script>

<style scoped>
img {
    width: 100%;
}
* {
    color: var(--bs-secondary);
}

ul{
    text-transform: uppercase;
    list-style-type: none;
    height: 100%;
}

.status li {
    float: left;
    padding: 5px 0;
    box-shadow: 1px 0 0 #eee;
    width: 25%;
    height: 100%;
}
.status li:last-of-type {
  box-shadow: none;
}
</style>