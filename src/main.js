// main.js

import { app, BrowserWindow, ipcMain } from 'electron';
import axios from 'axios';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Obtener __dirname para el contexto de módulo ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createWindow() {
    const win = new BrowserWindow({
        width: 450,
        height: 800,
        webPreferences: {
            preload: join(__dirname, 'preload.cjs'), // Asegúrate de que esta ruta es correcta
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
        }
    });

    win.loadFile('index.html'); // Cambia esta ruta si es necesario
}

// Manejar solicitudes de registro
ipcMain.on('register', async (event, data) => {
    try {
        const response = await axios.post('http://localhost:3000/register', data);
        console.log(response.data);
        
        event.sender.send('registerResponse', response.data); // Enviar respuesta al proceso de renderizado
    } catch (error) {
        event.sender.send('registerResponse', { error: error.message });
    }
});

// Manejar solicitudes de inicio de sesión
ipcMain.on('login', async (event, data) => {
    try {
        const response = await axios.post('http://localhost:3000/login', data);
        event.sender.send('loginResponse', response.data); // Enviar respuesta al proceso de renderizado
    } catch (error) {
        event.sender.send('loginResponse', { error: error.message });
    }
});

ipcMain.on('loadPage', (event, page) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    win.loadFile(page); // Cargar el archivo HTML especificado
});

app.whenReady().then(createWindow);
