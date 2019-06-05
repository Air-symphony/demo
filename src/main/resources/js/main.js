const Vue = require('vue/dist/vue.js');
const cytoscape = require('cytoscape');
//const cy-cola = require('cytoscape-cola');

Vue.component('cytoscape', {
  name: 'Cytoscape',
  components: {},
  created: function () {
  },
  data: function () {
    return {
      input: '',
      output: '',
      msg: 'vue to cytoscape',
      count: 0
    }
  },
  template: '<div id="cy"></div>',
  methods: {
    view_init: function () {
      this.cy = cytoscape(
        {
          container: document.getElementById('cy'),
          boxSelectionEnabled: false,
          autounselectify: true,
          style: cytoscape.stylesheet()
              .selector('node')
              .css({
                'height': 80,
                'width': 80,
                'background-fit': 'cover',
                'border-color': '#000',
                'border-width': 3,
                'border-opacity': 0.5,
                'content': 'data(name)',
                'text-valign': 'center'
              })
              .selector('edge')
              .css({
                'width': 6,
                'target-arrow-shape': 'triangle',
                'line-color': '#ffaaaa',
                'target-arrow-color': '#ffaaaa',
                'curve-style': 'bezier'
              }),
          elements: {
            nodes: [
              { data: { id: 'cat' } },
              { data: { id: 'bird' } },
              { data: { id: 'ladybug' } },
              { data: { id: 'aphid' } },
              { data: { id: 'rose' } },
              { data: { id: 'grasshopper' } },
              { data: { id: 'plant' } },
              { data: { id: 'wheat' } }
            ],
            edges: [
              { data: { source: 'cat', target: 'bird' } },
              { data: { source: 'bird', target: 'ladybug' } },
              { data: { source: 'bird', target: 'grasshopper' } },
              { data: { source: 'grasshopper', target: 'plant' } },
              { data: { source: 'grasshopper', target: 'wheat' } },
              { data: { source: 'ladybug', target: 'aphid' } },
              { data: { source: 'aphid', target: 'rose' } }
            ]
          },
          layout: {
            name: 'breadthfirst',
            directed: true,
            padding: 10
          }
        }
      )
    }
  },
  computed: {
  },
  mounted: function () {
    this.view_init()
  }
});

new Vue({ el: '#root' });
