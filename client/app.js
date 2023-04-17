const { app, BrowserWindow, ipcMain,ipcRenderer } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 500,
    height:350,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false,
    }
  })
  // win.removeMenu();
  win.loadFile('a.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.on("start-share",function(event,arg){
  //start partage
  //brodcasta utilisateur partage
})
ipcMain.on("stop-share",function(event,arg){
  // stop partage
})
