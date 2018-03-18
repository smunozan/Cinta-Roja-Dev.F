const MongoClient = require('mongodb').MongoClient
const db = require ('./configDb')

function saveUser(name, username, password){
	return MongoClient.connect(db.url).then(function(client){
		let db = client.db('rojaprueba')
		let collections = db.collection('login')
		let data = {
			'name' : name,
			'username': username,
			'password': password
		}
		return collections.insert(data)
	}).then(function(docs){
		return docs
	})
}

function findUser(username){
	return MongoClient.connect(db.url).then(function(client){
		let db = client.db('rojaprueba')
		let collections = db.collection('login')
		return collections.find({"username" : username}).toArray()
	}).then(function(docs){
		return docs
	}).catch(function(err){
		return err
	})
}

module.exports.saveUser = saveUser
module.exports.findUser = findUser