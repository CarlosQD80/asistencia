import sqlite3 from 'better-sqlite3';

export async function POST(req) {
  const { nombre, apellido } = await req.json();
  console.log(req);

  console.log('Nombre:', nombre, 'Apellido:', apellido);

  let db;
  try {
    db = new sqlite3('asistencia.db');
  } catch (error) {
    console.error('Error al abrir la base de datos:', error);
    return new Response(JSON.stringify({ message: 'Error al abrir la base de datos' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  await db.prepare('CREATE TABLE IF NOT EXISTS miembros (id INTEGER PRIMARY KEY, nombre TEXT, apellido TEXT)').run();

  if (!nombre || !apellido) {
    return new Response(JSON.stringify({ message: 'Nombre y apellido son requeridos' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  await db.prepare('INSERT INTO miembros (nombre, apellido) VALUES (?, ?)').run(nombre, apellido);

  return new Response(JSON.stringify({ message: 'Miembro registrado exitosamente' }), {
    status: 201,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}