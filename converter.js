const csv = require('csv-parser')
const fs = require('fs')
const csvToMarkdown = require("csv-to-markdown-table");
const YAML = require('json-to-pretty-yaml');

var readmeText = `# iOS and iPadOS Updates Data and Statistics

## Data Formats Available

- ODS
- CSV
- JSON

## Process

- Get data from sources cited in ODS file
- Export from ODS to CSV files
- Use JavaScript converter script to convert CSV into JSON

## Current Data

`

let readmeNotes = `## Notes

- Source data is collected in ODS file.
- Raw data notes in ODS are to clarify dates and versions when seemingly out of order.
- Statistics do not include trivial values (e.g. 0 days since last update of a major version on the day of the major version's release).

`

var csvDataFilePaths = []
var fileNames = []
let dataCategories = [
    'raw',
    'count',
    'stats',
    'metastats'
]
let platforms = [
    'iOS',
    'iPadOS'
]
for (var h = 0; h < platforms.length; h++) {
    let dirName = platforms[h]
    for (var j = 0; j < dataCategories.length; j++) {
        let fpath = 'csv/' + dirName + '/' + dataCategories[j] + '.csv'
        fileNames.push(dirName + '/' + dataCategories[j])
        console.log(fpath)
        csvDataFilePaths.push(fpath)
    }
}

var yml = ""
var jsStr = ""

for (var i = 0; i < csvDataFilePaths.length; i++) {
    let fpath = csvDataFilePaths[i]
    let name = fileNames[i]
    let res = []
    let csvStr = fs.readFileSync(fpath, 'utf8')
    console.log(csvStr)
    let mdStr = csvToMarkdown(csvStr, ",", true)
    readmeText += mdStr
    readmeText += "\n"
    fs.createReadStream(fpath)
        .pipe(csv())
        .on('data', (data) => res.push(data))
        .on('end', () => {
            // console.log(res)
            jsStr = JSON.stringify(res)
            yml = YAML.stringify(res);
            fs.writeFileSync('yaml/' + name + '.yaml', yml);
            fs.writeFileSync('json/' + name + '.json', jsStr)
            fs.writeFileSync('markdown/' + name + ".md", mdStr)
        });
}
readmeText += readmeNotes

// TODO: See updates to README.md file and update code above accordingly...
// fs.writeFileSync('README.md', readmeText)

