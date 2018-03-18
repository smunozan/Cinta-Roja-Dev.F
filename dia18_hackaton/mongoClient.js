const MongoClient = require('mongodb').MongoClient
const db = require ('./configDb')

function saveRubro(name,age,program){
	return MongoClient.connect(db.url).then(function(client){
		let db = client.db('rojaprueba')
		let collections = db.collection('estados')
		let data = {
			"estado":estado,
			"sexo":sexo,
			"rubro":rubro
		}

		return collections.insert(data).toArray()
	}).then(function(docs){
		return docs
	}).catch(function(err){
		console.log(error)
		return err
	})
}

// function findStudent(name){
// 	return MongoClient.connect(db.url).then(function(client){
// 		let db = client.db('rojaprueba')
// 		let collections = db.collection('students')
// 		return collections.find({"name" : name}).toArray()
// 	}).then(function(docs){
// 		return docs
// 	}).catch(function(err){
// 		return err
// 	})
// }

module.exports.saveRubro = saveRubro
// module.exports.findStudent = findStudent