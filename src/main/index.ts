import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

// Global reference to the main window to prevent window from being garbage collected
let mainWindow: Electron.BrowserWindow | null;

function createMainWindow() {
    // Create the browser window
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    // Load the index.html file
    mainWindow.loadURL(
        process.env.NODE_ENV === 'production'
            ? url.format({
                  pathname: path.join(__dirname, 'index.html'),
                  protocol: 'file:',
                  slashes: true,
              })
            : `http://localhost:3000/index.html`,
    );

    // Open DevTools
    mainWindow.webContents.openDevTools();

    // Dereference the window object when the window is closed
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createMainWindow);

// Quit when all windows are closed, except on macOS.
// There, it's common for applications and their menu bar
// to stay active until the user quits explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the
    // app when the dock icon is clicked and there are no
    // other windows open.
    if (mainWindow === null) {
        createMainWindow();
    }
});
