const tables = require("./tables.json");
const assert = require('assert');
const BigQuery = require('@google-cloud/bigquery');

async function copyTable(srcBigquery, destBigquery, datasetId, tableId) {
	// async function to only run one copy job at a time
	return new Promise((resolve, reject) => {
	srcBigquery
		.dataset(datasetId)
		.table(tableId)
		.copy(destBigquery.dataset(datasetId).table(tableId))
		.then(results => {
			const job = results[0];
			assert.equal(job.status.state, 'DONE');
			const errors = job.status.errors;
			resolve(`Job ${job.id} completed.`); // if successful return job details
			if (errors && errors.length > 0) {
				throw errors;
			}
		})
		.catch(err => {
			reject(err); // if errors send details to error handler
		});
	});
}

const main = async () => {
	// set the source project id
	const srcProjectId = process.argv[2];
	// const srcProjectId = "ga-cross-profile-settings";
	// set the destination project id
	// const destProjectId = "silicon-badge-219006";
	const destProjectId = process.argv[3];
	// set the dataset id
	// const datasetId = "149006597";
	const datasetId = process.argv[4];
	// create bigquery client for the source project
	const srcBigquery = new BigQuery({projectId: srcProjectId});
	// create bigquery client for the destination project
	const destBigquery = new BigQuery({projectId: destProjectId});
	// loop through the list of tables from the tables.json file
	for (const table of tables) {
		// for each table copy from the source project:dataset to the destination project:dataset
		const result = await copyTable(srcBigquery, destBigquery, datasetId, table.table_id)
		.then((data) => {
			console.log(data); // log out success
		})
		.catch(console.error); // log out errors
	}
}
if (module === require.main) {
	main();
}
