import { app, BrowserWindow } from "electron";
import path from "path";

export const createSettingsWindow = () => {
  // Create the browser window.
  const settingsWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "settings-preload.js"),
    },
  });

  // and load the settings.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    settingsWindow.loadURL(`${MAIN_WINDOW_VITE_DEV_SERVER_URL}/src/core/settings/settings.html`);
  } else {
    settingsWindow.loadFile(
      path.join(
        __dirname,
        `${MAIN_WINDOW_VITE_NAME}/src/core/settings/settings.html`,
      ),
    );
  }

  // Open the DevTools.
  settingsWindow.webContents.openDevTools();
};
