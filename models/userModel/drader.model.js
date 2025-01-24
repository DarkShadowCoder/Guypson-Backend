const db = require('../../config/db.config');

// Modèle drader
const Drader = {
  // Récupérer tous les draders
  getAll: (callback) => {
    const query = 'SELECT * FROM draders';
    db.query(query, callback);
  },

  // Récupérer un drader par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM draders WHERE id = ?';
    db.query(query, [id], callback);
  },

  // Recuperer les ddaders du drader
  getDdaders: (id, callback) => {
    const query = 'SELECT * FROM ddaders JOIN draders ON draders.id = ddaders.id_DRADER WHERE draders.id = ?';
    db.query(query, [id], callback);
  },
  // Créer un nouvel drader
  create: (data, callback) => {
    const query = 'INSERT INTO draders SET ?';
    db.query(query, data, callback);
  },


  // Mettre à jour un drader
  update: (id, data, callback) => {
    const query = 'UPDATE draders SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },

  // Supprimer un drader
  delete: (id, callback) => {
    const query = 'DELETE FROM draders WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Drader;

