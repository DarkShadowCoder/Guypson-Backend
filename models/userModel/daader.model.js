const db = require('../../config/db.config');

// Modèle daader
const Daader = {
  // Récupérer tous les daaders
  getAll: (callback) => {
    const query = 'SELECT * FROM daaders';
    db.query(query, callback);
  },

  // Récupérer un daader par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM daaders WHERE id = ?';
    db.query(query, [id], callback);
  },

  // Récupérer un daader par ddader
  getByDdader: (id, callback) => {
    const query = 'SELECT * FROM daaders WHERE id_DDADER = ?';
    db.query(query, [id], callback);
  },

  // Recuperer les pas du daader
  getPas: (id, callback) => {
    const query = 'SELECT * FROM pas JOIN daaders ON daaders.id = pas.id_DAADER WHERE daaders.id = ?';
    db.query(query, [id], callback);
  },

  // Recuperer les ddader du daader
  getDdader: (id, callback) => {
    const query = 'SELECT * FROM ddaders JOIN daaders ON ddaders.id = daaders.id_DDADER WHERE daaders.id = ?';
    db.query(query, [id], callback);
  },

  // Recuperer les campagnes de la daader
  getCampagnes: (id, callback) => {
    const query = 'SELECT * FROM campagnes JOIN villages ON villages.id = campagnes.id_village JOIN pas ON villages.id_PA = pas.id JOIN daaders ON pas.id_DAADER = daaders.id WHERE daaders.id = ?';
    db.query(query, [id], callback);
  },

  // Créer un nouvel daader
  create: (data, callback) => {
    const query = 'INSERT INTO daaders SET ?';
    db.query(query, data, callback);
  },

  // Mettre à jour un daader
  update: (id, data, callback) => {
    const query = 'UPDATE daaders SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },

  // Supprimer un daader
  delete: (id, callback) => {
    const query = 'DELETE FROM daaders WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Daader;