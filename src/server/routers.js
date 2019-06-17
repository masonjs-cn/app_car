const path = require('path');
const fs = require('fs');


module.exports = function(app) {

    let pageDir = path.join(__dirname, '../projects', process.env.NODE_ENV);


    let parentPages = fs.readdirSync(pageDir);
    let allPages = [];

    parentPages.forEach(function(item) {

        let stat = fs.statSync(path.join(pageDir, item));

        if (stat.isDirectory()) {

            let mockFile = path.join(pageDir, item, 'mock/index.js');

            if (fs.existsSync(mockFile)) {

                allPages.push(mockFile);
            }
        }

    })

    allPages.filter(function(file) {


        let fileIsExist = fs.existsSync(file);

        if (fileIsExist) {
        
            let mockData = require(file);

            for (let i in mockData) {

                app.all(i, mockData[i]);
            }
        }
    })
}