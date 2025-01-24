const db = require('../config/db.config');

// Modèle Speculation
const Spec = {
  // Récupérer tous les speculations
  getAll: (callback) => {
    const query = 'SELECT * FROM speculations';
    db.query(query, callback);
  },

  // Récupérer un Speculation par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM speculations WHERE id = ?';
    db.query(query, [id], callback);
  },

  // Récupérer les campagnes d'une speculations
  getCampagnes: (id, callback) => {
    const query = 'SELECT * FROM campagnes JOIN speculations ON speculations.id = campagnes.id_Speculation WHERE speculations.id = ?';
    db.query(query, [id], callback);
  },

  // Créer un nouvel Speculation
  create: (data, callback) => {
    const query = 'INSERT INTO speculations SET ?';
    db.query(query, data, callback);
  },

  // Mettre à jour un Speculation
  update: (id, data, callback) => {
    const query = 'UPDATE speculations SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },

  // Supprimer un Speculation
  delete: (id, callback) => {
    const query = 'DELETE FROM speculations WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Spec;
