const {app, BrowserWindow} = require("electron");
const  menu  = require("./menuTemplate.js");
const path = require("path");

const createWin = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 400,
        webPreferences: {
            preload: path.join(__dirname, './preload.js')
        }
    });
    win.loadURL("http://localhost:3000");
    // win.loadFile("./build/index.html");
    menu.createMenu(win);
    
}

app.whenReady().then(() => {
    console.error("init success")
    createWin();


    app.on('window-all-closed', () => {
        if (process.platform !== "darwin")  {
            app.quit();
        }
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWin()
        }
    })
})

