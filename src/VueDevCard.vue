<template>
<div class="card m-5 holder">
  <div class="card-header">
    <div class="nav nav-pills card-header-pills me-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button 
              v-for="(node,i) in nodes" 
              :key="i" 
              class="nav-link" 
              :id="'v-pills-' + i + '-tab'"
              data-bs-toggle="pill" 
              :data-bs-target="'#v-pills-' + i" 
              type="button" 
              role="tab" 
              :aria-controls="'v-pills-' + i" 
              aria-selected="true"
              selected="2">
                  {{node.type.name}}
          </button>
      </div>
    </div>
    <div class="card-body">
      <div class="tab-content" id="v-pills-tabContent">
          <wrap-node 
              v-for="(node,i) in nodes" 
              :key="i" 
              class="tab-pane fade" 
              :id="'v-pills-' + i" 
              role="tabpanel" 
              :aria-labelledby="'v-pills-' + i + '-tab'"
              :value="node">
          </wrap-node>
      </div>
    </div>
</div>
</template>

<script>
import { h } from 'vue';
import './assets/bootstrap-night.min.css'
import 'bootstrap'

const WrapNode = {
  props: {
    value: { type: [Object, Array], required: true },
    tag: { type: String, default: 'div' },
    options: {
      type: Object,
      default: () => {},
    },
  },
  render() {
    let nodes = this.value;
    if (!Array.isArray(nodes)) {
      nodes = [nodes];
    }
    return h(this.tag, this.options, nodes);
  },
};

export default {
  name: 'vue-dev-card',
  components: { WrapNode },
  computed: {
    nodes() {
      return this.$slots.default();
    },
  },
};
</script>

<style scoped>
.holder {
  border: 1px solid var(--bs-primary);
}

.card-body {
  overflow-x: scroll;
}
</style>