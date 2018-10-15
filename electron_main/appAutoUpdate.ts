import {autoUpdater} from 'electron-updater';
const log = require('electron-log');
export class AppAutoUpdate {
  constructor() {

    log.transports.file.level = 'debug';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
    this.logStatus('Entramos a procesar');
    autoUpdater.on('checking-for-update', () => {
      this.logStatus('Checking for update...');
    });
    autoUpdater.on('update-available', () => {
      this.logStatus('Update available.');
    });
    autoUpdater.on('update-not-available', () => {
      this.logStatus('Update not available.');
    });
    autoUpdater.on('error', () => {
      this.logStatus('Error in auto-updater.');
    });
    autoUpdater.on('download-progress', () => {
      this.logStatus('Download progress...');
    });

    autoUpdater.on('update-downloaded', () => {
      this.logStatus('Update downloaded; will install in 10 seconds');
      // sendStatusToWindow(mainWindow);
    });


  }

  private logStatus (message) {
    log.info(message);
  }
}
