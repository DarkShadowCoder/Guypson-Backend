const db = require('../../config/db.config');

// Modèle ddader
const Ddader = {
  // Récupérer tous les ddaders
  getAll: (callback) => {
    const query = 'SELECT * FROM ddaders';
    db.query(query, callback);
  },

  // Récupérer un ddader par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM ddaders WHERE id = ?';
    db.query(query, [id], callback);
  },

  // Récupérer un ddader par drader
  getByDrader: (id, callback) => {
    const query = 'SELECT * FROM ddaders WHERE id_DRADER = ?';
    db.query(query, [id], callback);
  },

  // Recuperer les daaders du ddader
  getDaaders: (id, callback) => {
    const query = 'SELECT * FROM daaders JOIN ddaders ON ddaders.id = daaders.id_DDADER WHERE ddaders.id = ?';
    db.query(query, [id], callback);
  },

  // Recuperer le drader du ddader
  getDrader: (id, callback) => {
    const query = 'SELECT * FROM draders JOIN ddaders ON draders.id = ddaders.id_DRADER WHERE ddaders.id = ?';
    db.query(query, [id], callback);
  },

  // Recuperer les campagnes de la daader
  getCampagnes: (id, callback) => {
    const query = 'SELECT * FROM campagnes JOIN villages ON villages.id = campagnes.id_village JOIN pas ON villages.id_PA = pas.id JOIN daaders ON pas.id_DAADER = daaders.id JOIN ddaders ON ddaders.id = daaders.id_DDADER WHERE ddaders.id = ?';
    db.query(query, [id], callback);
  },

  // Créer un nouvel ddader
  create: (data, callback) => {
    const query = 'INSERT INTO ddaders SET ?';
    db.query(query, data, callback);
  },

  // Mettre à jour un ddader
  update: (id, data, callback) => {
    const query = 'UPDATE ddaders SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },

  // Supprimer un ddader
  delete: (id, callback) => {
    const query = 'DELETE FROM ddaders WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Ddader;
