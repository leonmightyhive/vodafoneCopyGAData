# Vodafone Copy GA Data

This script copies tables from one Google Biqquery Project:Dataset to another Project:Dataset.
It uses a list of tables from the tables.json file

## Installation

### Create the tables.json file
1. Go to `https://bigquery.cloud.google.com/queries/`
2. Click on **Compose Query**
3. Enter the following query in the query window, replacing [PROJECT_ID].[DATASET_ID] with the source Project ID and Dataset ID:
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
$ git clone https://github.com/leonmightyhive/vodafoneCopyGAData.git
```
4. Go into the folder by entering the following command
```
$ cd vodafoneCopyGAData
```
5. Install the dependencies by entering the following command 
```
$ npm install
```
6. Upload the `tables.json` file by clicking the `⋮` icon in the top right of the console and select **Upload file**

## Usage

To start the script running type the following command into the console, replaceing [source_project_id] [destination_project_id] [dataset_id]:

```
$ node app.js [source_project_id] [destination_project_id] [dataset_id]
```
The script will copy each table one by one.
