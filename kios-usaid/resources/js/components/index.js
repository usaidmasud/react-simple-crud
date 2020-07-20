import Vue from 'vue'
import Card from '@components/Card'
import Child from '@components/Child'
// Components that are registered globaly.
[
  Card,
  Child,
].forEach(Component => {
  Vue.component(Component.name, Component)
})
