// ============================================
// ESTRUCTURA DE DATOS: CONDICIONES GES
// ============================================

const CONDICIONES_GES = {
  'enfermedades-cronicas': {
    titulo: 'Enfermedades Crónicas',
    icono: '💊',
    items: [
      { nombre: 'Diabetes mellitus tipo 1', numero: 6, url: 'https://www.superdesalud.gob.cl/orientacion-en-salud/diabetes-mellitus-tipo-1/', enGuia: true },
      { nombre: 'Diabetes mellitus tipo 2', numero: 7, url: 'https://www.superdesalud.gob.cl/orientacion-en-salud/diabetes-mellitus-tipo-2/', enGuia: true },
      { nombre: 'Hipertensión arterial primaria', numero: 21, url: 'https://www.superdesalud.gob.cl/', enGuia: true },
      { nombre: 'Asma bronquial', numero: 22, url: 'https://www.superdesalud.gob.cl/', enGuia: true },
      { nombre: 'Epilepsia no refractaria', numero: 24, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Enfermedad pulmonar obstructiva crónica', numero: 31, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Hipotiroidismo primario congénito', numero: 33, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Insuficiencia renal crónica', numero: 39, url: 'https://www.superdesalud.gob.cl/', enGuia: false }
    ]
  },
  'canceres': {
    titulo: 'Cánceres',
    icono: '🏥',
    items: [
      { nombre: 'Cáncer cervicouterino', numero: 4, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Cáncer de mama', numero: 5, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Cáncer de pulmón', numero: 8, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Cáncer colorrectal', numero: 9, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Cáncer testicular', numero: 11, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Linfomas', numero: 12, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Cáncer de próstata', numero: 13, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Leucemia linfoide aguda en menores de 15 años', numero: 14, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Cáncer ovárico', numero: 15, url: 'https://www.superdesalud.gob.cl/', enGuia: false }
    ]
  },
  'salud-mental': {
    titulo: 'Salud Mental',
    icono: '🧠',
    items: [
      { nombre: 'Esquizofrenia', numero: 25, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Depresión grave en menores de 15 años', numero: 26, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Depresión grave en personas de 15 años y más', numero: 27, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Trastorno bipolar', numero: 28, url: 'https://www.superdesalud.gob.cl/', enGuia: false }
    ]
  },
  'salud-ocular': {
    titulo: 'Problemas Oculares',
    icono: '👁️',
    items: [
      { nombre: 'Cataratas', numero: 30, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Retinopatía diabética', numero: 32, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Estrabismo en menores de 9 años', numero: 35, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Baja visión', numero: 36, url: 'https://www.superdesalud.gob.cl/', enGuia: false }
    ]
  },
  'salud-oral': {
    titulo: 'Salud Oral',
    icono: '🦷',
    items: [
      { nombre: 'Atención de urgencias odontológicas', numero: 37, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Salud oral integral en menores de 20 años', numero: 40, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Salud oral integral en gestantes', numero: 48, url: 'https://www.superdesalud.gob.cl/', enGuia: false }
    ]
  },
  'infecciones': {
    titulo: 'Enfermedades Infecciosas',
    icono: '🦠',
    items: [
      { nombre: 'VIH/SIDA', numero: 1, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Tuberculosis', numero: 2, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Hepatitis C', numero: 3, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Infección respiratoria aguda en menores de 5 años', numero: 19, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Enfermedad de Chagas', numero: 29, url: 'https://www.superdesalud.gob.cl/', enGuia: false }
    ]
  },
  'musculoesqueletico': {
    titulo: 'Problemas Musculoesqueléticos',
    icono: '🦴',
    items: [
      { nombre: 'Artrosis de cadera y rodilla', numero: 34, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Artritis reumatoídea', numero: 38, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Fractura de cadera en mayores de 60 años', numero: 43, url: 'https://www.superdesalud.gob.cl/', enGuia: false }
    ]
  },
  'maternidad': {
    titulo: 'Salud Materna y Perinatal',
    icono: '👶',
    items: [
      { nombre: 'Protección, promoción y apoyo a la lactancia materna', numero: 41, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Parto prematuro y complicaciones del embarazo', numero: 42, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Cáncer de mama gestacional y posgestacional', numero: 47, url: 'https://www.superdesalud.gob.cl/', enGuia: false }
    ]
  },
  'pediatria': {
    titulo: 'Condiciones Pediátricas',
    icono: '👧',
    items: [
      { nombre: 'Dislipidemias en menores de 20 años', numero: 10, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Fibrosis quística', numero: 16, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Displasia broncopulmonar', numero: 17, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Cardiopatía congénita operativa', numero: 18, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Labio y paladar hendido', numero: 20, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Fenilcetonuria', numero: 23, url: 'https://www.superdesalud.gob.cl/', enGuia: false }
    ]
  },
  'otros': {
    titulo: 'Otros y Servicios',
    icono: '📋',
    items: [
      { nombre: 'Colecistectomía preventiva', numero: 44, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Enfermedad renal crónica', numero: 45, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Enfermedad pulmonar intersticial difusa', numero: 46, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Hemorragia subaracnoidea secundaria a rotura de aneurisma cerebral', numero: 49, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Hipoacusia bilateral simétrica', numero: 50, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Limitación funcional en mayores de 60 años', numero: 51, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Lesión medular traumática', numero: 52, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Traumatismo ocular grave', numero: 53, url: 'https://www.superdesalud.gob.cl/', enGuia: false },
      { nombre: 'Secuelas de accidente cerebrovascular', numero: 54, url: 'https://www.superdesalud.gob.cl/', enGuia: false }
    ]
  }
};

// Mapeo de IDs de página a nombres GES
const MAPEO_PAGINA_GES = {
  'diabetes-tipo-1': 'Diabetes mellitus tipo 1',
  'diabetes-tipo-2': 'Diabetes mellitus tipo 2',
  'hipertension': 'Hipertensión arterial primaria',
  'asma': 'Asma bronquial',
  'epilepsia': 'Epilepsia no refractaria',
  'epoc': 'Enfermedad pulmonar obstructiva crónica',
  'hipotiroidismo': 'Hipotiroidismo primario congénito',
  'insuficiencia-renal': 'Insuficiencia renal crónica'
};

// ============================================
// FUNCIONES HELPER PARA GES
// ============================================

function verificarSiEsGES(idPagina) {
  const nombre = MAPEO_PAGINA_GES[idPagina];
  if (!nombre) return false;
  
  for (const categoria of Object.values(CONDICIONES_GES)) {
    if (categoria.items.some(item => item.nombre === nombre)) {
      return true;
    }
  }
  return false;
}

function obtenerDatosGES(idPagina) {
  const nombre = MAPEO_PAGINA_GES[idPagina];
  if (!nombre) return null;
  
  for (const categoria of Object.values(CONDICIONES_GES)) {
    const item = categoria.items.find(i => i.nombre === nombre);
    if (item) return item;
  }
  return null;
}

function renderizarGES() {
  const container = document.getElementById('gesContainer');
  if (!container) return;
  
  let html = `
    <div style="background: var(--verde-claro); border-left: 4px solid var(--verde); padding: 12px 14px; border-radius: 8px; margin-bottom: 16px;">
      <p style="margin: 0; font-size: 13px; color: var(--texto); line-height: 1.5;">
        <strong style="color: var(--verde);">¿Qué es GES?</strong><br>
        Son 61 garantías explícitas en salud. Si tienes una de estas condiciones, tienes derecho a cobertura asegurada, acceso sin demoras excesivas y protección financiera en el CESFAM N°5 y red pública.
      </p>
    </div>
  `;
  
  Object.values(CONDICIONES_GES).forEach(categoria => {
    html += `<div style="margin-bottom: 18px;">
      <div style="font-size: 12px; font-weight: 600; color: var(--verde); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
        <span style="font-size: 14px;">${categoria.icono}</span>
        ${categoria.titulo}
      </div>`;
    
    categoria.items.forEach(item => {
      const badge = item.enGuia ? '<span style="background: var(--verde); color: white; font-size: 10px; padding: 2px 6px; border-radius: 4px; margin-left: 6px;">En guía</span>' : '';
      html += `
        <div style="background: var(--blanco); border: 1px solid var(--borde); border-radius: 10px; padding: 10px 12px; margin-bottom: 6px; font-size: 13px; cursor: pointer; transition: all 0.15s; display: flex; justify-content: space-between; align-items: center;"
             onclick="abrirURL('${item.url}')"
             style="background: var(--blanco); border: 1px solid var(--borde); border-radius: 10px; padding: 10px 12px; margin-bottom: 6px; font-size: 13px; cursor: pointer; transition: all 0.15s; display: flex; justify-content: space-between; align-items: center;">
          <span>${item.nombre}</span>
          ${badge}
        </div>`;
    });
    
    html += `</div>`;
  });
  
  container.innerHTML = html;
}

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', () => {
  renderizarGES();
});
