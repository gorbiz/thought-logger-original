const electron = require('electron')
const { app, BrowserWindow } = electron

app.on('ready', () => {
  const { width } = electron.screen.getPrimaryDisplay().workAreaSize
  let win = new BrowserWindow({ width, height: 120, frame: false })
  win.loadFile('index.html')
})
