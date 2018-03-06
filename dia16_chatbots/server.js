const Bootbot = require('bootbot');

const bot = new Bootbot({
	accessToken: 'EAAaJvNYdCYUBAHkBOdlg9vqheQZAJw2y9LC6pYh2OYsVQrMumNuujdw82eiOuMT453TZAvNn7Yn6YojnV0WLhSANpcp4LR6wqJcNnjkkTJ0FZARYJ5szknbe0BGgPnGVgARRBQBkqheP2MbaHAG0ANffpjRxqSxTeX7O01hPgZDZD',
	verifyToken: 'botprueba',
	appSecret: '9f43ccbdd863ecf1c69769790273017a'
});

// bot.on('message',(payload,chat)=>{
// 	console.log(payload)
// 	chat.say('Hola mundo, soy un bot')
// });

bot.hear(['hola','que onda','que pedo'],(payload,chat)=>{
	chat.say('Hola soy un bot :D')
})

bot.hear(['chao','adios','bye'],(payload,chat)=>{
	chat.say('Nos vemos')
})

bot.hear(['comida','hambre'],(payload,chat)=>{
	chat.say({
		text: 'Que quieres comer?',
		quickReplies: ['Pizza', 'Hamburgesa']
	})
})

bot.hear(['ayuda','ayudame'],(payload,chat)=>{
	chat.say({
		text: 'Que necesitas?',
		buttons: [
			{type: 'postback', title: 'FAQ', payload:'HELP_FAQ'},
			{type: 'postback', title: 'settings', payload:'HELP_SETTINGS'},
			{type: 'postback', title: 'Ayuda humana', payload:'HELP_HUMAN'}
		]
	})
	console.log(payload)
})

bot.on('postback:HELP_HUMAN',(payload,chat)=>{
	chat.say('Una persona te va a ayudar')
});

bot.hear(['lista'], (payload, chat) => { 
  chat.say({
	elements: [
        { title: 'Artile 1', image_url: 'https://www.iheartnaptime.net/wp-content/uploads/2014/08/Shredded-beef-tacos-200x200.jpg', default_action: {"type": "web_url","url": "https://www.google.com.mx/"}},
		{ title: 'Artile 2', image_url: 'https://www.iheartnaptime.net/wp-content/uploads/2014/08/Shredded-beef-tacos-200x200.jpg', default_action: {"type": "web_url","url": "https://www.google.com.mx/",}}
	],
	buttons: [
		{ type: 'postback', title: 'View More', payload: 'VIEW_MORE' }
	]
});
});

bot.start()