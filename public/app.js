const version = require('react');

const VERSION = '1.2.0';

function saludar(nombre) {
  return `hola ${nombre}, bienvenido a liseth`;
}

function healthcheck() {
  return {
    status: 'ok',
    version: VERSION,
    timestamp: new Date().toISOString(),
    message: 'sistemas liseth funcionando correctamente'
  };
}

function verificarSistema() {
  const resultado = healthcheck();
  const statusDiv = document.getElementById('status');

  statusDiv.textContent = `${resultado.message} | ${resultado.timestamp}`;
  statusDiv.style.color = 'green';
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('version').textContent = `V${VERSION}`;
  verificarSistema();
});