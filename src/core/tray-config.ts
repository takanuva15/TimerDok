import { app, Tray, Menu } from "electron";

export const configureTrayIcon = () => {
  let appIcon = null;
  app.whenReady().then(() => {
    appIcon = new Tray("src/assets/tray-icons/light/timer-tray-icon-light.ico");
    const contextMenu = Menu.buildFromTemplate([
      {
        label: "Settings",
        click: () => {
          console.log("Settings");
        },
      },
      { label: "About", role: "about" },
      { type: "separator" },
      { label: "Quit", click: () => app.quit() },
    ]);

    appIcon.setContextMenu(contextMenu);
  });
}
