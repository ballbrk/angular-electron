import {app, BrowserWindow, screen, ipcMain} from 'electron';


export class IpcMainManagement {

  constructor() {
    ipcMain.on('ping', (event, payload) => {
      console.log('Esto es un test');
      console.log(payload);
    });

  }
}
