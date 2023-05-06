import { ipcRenderer } from 'electron';

console.log('Renderer process started');

// Send a message to the main process
ipcRenderer.send('renderer:start');

// Listen for a message from the main process
ipcRenderer.on('main:message', (event, message) => {
    console.log(`Received message from main process: ${message}`);
});
