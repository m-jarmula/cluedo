Vue.component('game', {
  data () {
	  return {
		  players: [],
		  start: false
	  }
  },
  methods: {
	  startGame () {
		  this.start = true
		  this.players = Array.prototype.slice.call(this.$refs.playersForm.getElementsByTagName("input"))
		  .map(input => { return input.value })
		  .filter((name) => { return name.length > 0 })
	  }
  },
  template: `
	<div class="container">
		<template v-if="start">
			<gametable :players="players" v-if="players" />
		</template>
		<template v-else>
			<form ref="playersForm">
				<div class="form-group" v-for="index in 6" :key="index">
					<input type="text" class="form-control" placeholder="Player initials">
				</div>
				
				<button class="btn btn-primary" @click="startGame">Start game</button>
			</form>
		</template>
	</div>
  `
})