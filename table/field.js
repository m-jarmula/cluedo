Vue.component('tablefield', {
  data () {
	  return {
		  currentState: 0,
		  states: [0, 1, 2]
	  }
  },
  methods: {
	  changeState () {
		  if (!this.states[this.currentState + 1]) {
			  this.currentState = 0
		  } else {
			  this.currentState++
		  }
	  }
  },
  template: `
	<td @click="changeState" class="field">
		<i class="bi" v-bind:class="{ 'red bi-x-circle': this.currentState === 1, ' green bi-check-circle': this.currentState === 2 }"></i>
	</td>
  `
})
