onmessage = function(msg){
    console.log(msg);
    console.log(msg.data);
    postMessage(msg.data);
}

