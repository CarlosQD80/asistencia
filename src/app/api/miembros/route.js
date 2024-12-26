import sqlite3 from 'better-sqlite3';

export async function GET(req) {
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
  
    let miembros;
    try {
      miembros = db.prepare('SELECT * FROM miembros').all();
    } catch (error) {
      console.error('Error al obtener los miembros:', error);
      return new Response(JSON.stringify({ message: 'Error al obtener los miembros' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  
    return new Response(JSON.stringify(miembros), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }