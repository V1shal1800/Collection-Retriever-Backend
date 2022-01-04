const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Collection = require('../models/collections');


router.get('/', (req, res, next) => {
	// const key = req.params.key
	Collection.find()
		.exec()
		.then((docs) => {
			// if (doc) {
				res.status(200).json({
					data: docs,
				});
			// } else {
			// 	res.status(404).json({
			// 		message: 'No Valid Entry for the Given Key'
			// 	});
			// }
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

router.post('/', (req, res, next) => {
	const collection = new Collection({
		key: req.body.key,
		collections: req.body.collections
    });
	collection
		.save()
		.then((result) => {
			res.status(201).json({
                addedCollections: result
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

router.patch('/:key', (req, res, next) => {
	const key = req.params.key
	Collection.update({ key }, { $set: { collections: req.body.collections } })
		.exec()
		.then((result) => {
			res.status(200).json({
				message: 'Collections Updated'
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

router.delete('/', (req, res, next) => {
	Collection.remove()
		.exec()
		.then((result) => {
			res.status(200).json({
				message: 'Clear Successful'
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

module.exports = router