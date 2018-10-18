# Vodafone Copy GA Data

This script copies tables from one Google Biqquery Project:Dataset to another Project:Dataset.
It uses a list of tables from the tables.json file

## Installation

### Create the tables.json file
1. Go to `https://bigquery.cloud.google.com/queries/`
2. Click on **Compose Query**
3. Enter the following query, replacing [PROJECT_ID].[DATASET_ID] with the source Project ID and Dataset ID:
```sql
SELECT table_id FROM `[PROJECT_ID].[DATASET_ID].__TABLES_SUMMARY__`
```
4. Click on **Show Options** and uncheck **_Use Legacy SQL_**
5. Click on **Run Query**
6. When the query completes, click on **Download as JSON**
7. Rename this file to `tables.json`

### Copy script files to gCloud Console
1. Go to `https://console.cloud.google.com/`
2. Click on the Terminal icon in the toolbar to start the console
3. Copy and paste this command into the console to copy the files:
```
$ git clone
```
3. Create a new folder by typing the command in the console `$ mkd`

`$ pip install foobar`

## Usage

```
$ node app.js
```

