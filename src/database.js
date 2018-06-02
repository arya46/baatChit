import {MongoClient} from 'mongodb'

// const URL = 'mongodb://localhost:27017/baatchit';
const URL = 'mongodb://adminguy:adminguy1@ds245680.mlab.com:45680/baatchit';


export default class Database{

	connect(){


		return new Promise((resolve, reject) => {

			MongoClient.connect(URL, (err, db) => {
				
				return err ? reject(err) : resolve(db);

			});


		});



	}
}