
const {ipcRenderer, contextBridge} = require('electron');

contextBridge.exposeInMainWorld("API", {
  send: (channel, message) => {
      ipcRenderer.send(channel, message);
  },
  receive: (channel, func) => {
    ipcRenderer.on(channel, (event, args) => {func(event, args)});
  }
})