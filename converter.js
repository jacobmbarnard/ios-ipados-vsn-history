const csv = require('csv-parser')
const fs = require('fs')
const csvToMarkdown = require("csv-to-markdown-table");
const YAML = require('json-to-pretty-yaml');

const OSVersionRelease = require('./os-version-release')

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
            jsStr = JSON.stringify(res)
            yml = YAML.stringify(res)
            fs.writeFileSync('yaml/' + name + '.yaml', yml)
            fs.writeFileSync('json/' + name + '.json', jsStr)
            fs.writeFileSync('markdown/' + name + ".md", mdStr)
        });
}
