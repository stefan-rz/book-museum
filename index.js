let fetch = require("node-fetch");

exports.handler = async (evt) => {
    // fetch the request
    let url = 'https://l2lib4glae.execute-api.eu-west-1.amazonaws.com/Prod/museum'
    let res = await fetch(url,{method:'POST',body:JSON.stringify(evt)});
    let json = await res.json();
    return json;
}