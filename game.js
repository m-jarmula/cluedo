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
      <button class="btn btn-primary" onclick="if(confirm('Are you sure you want to restart?')) { window.location.reload() }">Restart</button>
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
