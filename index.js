const {BrowserWindow,app}=require("electron")
var window=null;
app.on("ready",function(_) {
    window=new BrowserWindow({});
    window.loadURL("file:///"+__dirname+"/index.html")
})
