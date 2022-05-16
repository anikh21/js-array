const fs = require('fs');
const path = require('path');

const createFile = () => {
    fs.mkdir(path.resolve(__dirname, '../db'), { recursive: true }, (err) => {
        if (err) throw err;
    });
    fs.appendFile('../db/data.json', '', () => {});
};

module.exports.saveFile = (data, fileName) => {
    try {
        fs.writeFileSync(fileName, JSON.stringify(data));
    } catch (error) {
        createFile();
    }
};

module.exports.readFile = (fileName) => {
    try {
        const data = fs.readFileSync(fileName, 'utf-8');
        return data && JSON.parse(data);
    } catch (error) {
        createFile();
    }
};
