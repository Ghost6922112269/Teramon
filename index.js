const Command = require('command'),
		fs = require('fs'),
		path= require('path')
		var maymay
		
let enabled=false,
	nameru,
	playername,
	meme,
	cid,
	ucid = 33333333333333,
	x,
	y,
	z,
	zone
module.exports = function Teramon(dispatch) {
	const command = Command(dispatch)
		
	dispatch.hook('S_LOGIN', 2, (event) => {
		pcid = event.cid
		pserver = event.serverId
		pid = event.playerId
		})
dispatch.hook('C_PLAYER_LOCATION', 1, event =>{
		location = event
		w = event.w
		x = event.x1
		y = event.y1
		z = event.z1	
})
command.add('pokecome', () => {
	dispatch.toClient('S_DESPAWN_USER', 2, {
	target: ucid-1,
	type: 1	
	})
	ucid--
	})
command.add('pokego', (nameru) => {
		setTimeout(nene, 500)
		fs.readFile(path.join(__dirname, 'Teradex', nameru+'.json'), function(err,data){
			if (err) {
				command.message('Incorrect name or player not logged, dummy')
				return
}
maymay=JSON.parse(data)
})
})
function nene(){
dispatch.toClient('S_SPAWN_USER', 5, {
	serverId: 666,
			playerId: 666,
			cid: ucid++,
			x: x,
			y: y,
			z: z,
			w: w,
			relation: 1, //determines players relation to you, ex if they're hostile or a guild member
			model: maymay.model,
			unk6: 1, //visible
			alive: 1, // alive
			appface: maymay.appface,
			apphair: maymay.apphair,
			effect: 0, // spawn style? 0 for NYOOM 1 for nothing
			type: 7,
			mount: maymay.mount,
			title: maymay.title, //title
			weapon: maymay.weapon, // just to get models to display
			weaponEnchant: maymay.weaponEnchant,
			hairAdornment: maymay.hairAdornment,
			mask: maymay.mask,
			back: maymay.back,
			weaponSkin: maymay.weaponSkin,
			costume: maymay.costume,
			costumeDye: maymay.costumeDye,
			unk43: 1, //costume display
			name: maymay.name,
			guild: maymay.guild,
			guildEmblem: maymay.guildEmblem
			})
}

	dispatch.hook('S_SPAWN_USER',5,event => {
		meme = [event.model, event.appface, event.apphair, event.mount, event.hairAdornment, event.mask, event.back, event.costume, event.weaponSkin, event.weaponEnchant, event.name, event.serverId, event.playerId, event.cid, event.icon]
		fs.writeFile(path.join(__dirname, 'Teradex', event.name+'.json'),(JSON.stringify(event)), err => {
		if(err) console.error(e.stack)	
		})			
	})
	
}
