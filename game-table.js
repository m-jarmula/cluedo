Vue.component('gametable', {
  props: ['players'],
  data () {
	  return {
		  characters: ['Miss Scarlett', 'Colonel Mustard', 'Mr. Green', 'Mrs. Peacock', 'Professor Plum', 'Dr Orchid'],
		  weapons: ['Revolver', 'Dagger', 'Lead pipe', 'Rope', 'Candlestick', 'Wrench'],
		  rooms: ['Kitchen', 'Ballroom', 'Conservatory', 'Dining Room', 'Billiard Room', 'Library', 'Lounge', 'Hall', 'Study'],
		  colspan: this.players.length + 1
	  }
  },
  template: `
<table class="table table-dark" style="overflow-x:auto;">
	<thead id="tableHeader">
		<tr>
			<th>Players:</th>
			<th v-for="player in players" :key="player" style="text-align: center"> {{player}}</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th :colspan="colspan">Murderer:</th>
		</tr>
		<tr v-for="(character, index) in characters" :key="character">
			<tablefieldlabel :value="character" />
			<tablefield v-for="player in players" :key="player" />
		</tr>
		<tr>
			<th :colspan="colspan">Weapon:</th>
		</tr>
		<tr v-for="(weapon, index) in weapons" :key="weapon">
			<tablefieldlabel :value="weapon" />
			<tablefield v-for="player in players" :key="player" />
		</tr>
		<tr>
			<th :colspan="colspan">Room:</th>
		</tr>
		<tr v-for="(room, index) in rooms" :key="room">
			<tablefieldlabel :value="room" />
			<tablefield v-for="player in players" :key="player" />
		</tr>
	</tbody>
</table>
  `
})
