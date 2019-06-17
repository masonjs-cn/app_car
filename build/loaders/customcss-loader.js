const fs = require('fs');
const path = require('path')

module.exports = function(source) {
    
    let appSource = '';
    

    if(process.env.NODE_PLATFORM == 'app') {
        
         appSource = fs.readFileSync(path.join(process.cwd(), 'src/common/css/app.less'),'utf-8');
      
    }

    return appSource + source
}