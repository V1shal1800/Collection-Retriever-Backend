
const mongoose = require('mongoose');

const collectionSchema = mongoose.Schema({
	// collectionList: [{ id: String, name: String, owner: String, createdAt: String, updatedAt: String, uid: String, isPublic: Boolean }]
	key: String,
	collections: [{ id: String, name: String, owner: String, createdAt: String, updatedAt: String, uid: String, isPublic: Boolean }]
});

module.exports = mongoose.model('Collection', collectionSchema);