initNodeRequire();
const  ipcRenderer = require("electron").ipcRenderer;


window.onload=function(){
    // ipcRenderer.on("uuid",function (event, data) {
    //         document.getElementById("code").innerHTML = data;
    //     })
}

function start(){
    // ipcRenderer.send("start-partage",{}); 
    document.getElementById("start").style.display="none";
    document.getElementById("stop").style.display="block";
}
function stop(){
    ipcRenderer.send("stop-partage",{})
    document.getElementById("start").style.display="block";
    document.getElementById("stop").style.display="none";
}