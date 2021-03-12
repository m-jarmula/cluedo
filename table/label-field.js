Vue.component('tablefieldlabel', {
  data () {
	  return {
		  currentState: 0,
		  states: [0, 1, 2]
	  }
  },
  props: ['value'],
  methods: {
	  changeState () {
		  if (!this.states[this.currentState + 1]) {
			  this.currentState = 0
		  } else {
			  this.currentState++
		  }
		  console.log(this.states[this.currentState])
	  },
	  labelStyle () {
		  if (this.currentState == 1) {
			  return `
			  { text-decoration: line-through }
			  `
		  } else if(this.currentState == 2) {
			  			  return `
			  { text-decoration: underline }
			  `
		  } else {
			  return ''
		  }
	  }
  },
  template: `
	<td @click="changeState"
		class="labelfield"
		:style="this.currentState == 1 ? {'text-decoration': 'line-through'} : this.currentState == 2 ? {'text-decoration': 'underline'}: {}">
	{{value}}
	</td>
  `
})