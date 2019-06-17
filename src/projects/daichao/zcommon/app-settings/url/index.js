import {urls, publicParams} from './urls';
import path from 'path'

let realUrls = {};

for (let item in urls) {

    let pageUrl = urls[item];

    realUrls[item] = {};

    for (let i in pageUrl) {

        if (i !== 'base') {
            generateUrl(pageUrl[i], i, pageUrl, item);
        }

    }
}

function generateUrl(param, i, pageUrl, item) {

    let url = typeof param === 'string' ? param: param.url;
    let domain = '/';
    
    let base = param.base || pageUrl.base || publicParams.base;
    
    if(process.env.NODE_ENV=='mocklocal') {

        domain = publicParams.mocalLocalDomain;
    }

    if(process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'mocktest'){

        domain = param.testDomain || publicParams.testDomain;
    }

    if(process.env.NODE_ENV === 'production') {

        domain = param.buildDomain || publicParams.buildDomain;
    }

    if(process.env.NODE_ENV === 'dev'){

        base = '';
        domain = publicParams.localDomain;
    }

    if (process.env.NODE_ENV === 'static' || process.env.NODE_ENV === 'staticbuild') {
        domain = ''
    }

    
    realUrls[item][i] = `${domain}${path.join(base , url)}`;
}

console.log(realUrls);

export default realUrls;

