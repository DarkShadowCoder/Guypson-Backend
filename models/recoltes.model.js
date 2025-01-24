const db = require('../config/db.config');

// Modèle Recolte
const Récoltes = {
  // Récupérer tous les récoltes
  getAll: (callback) => {
    const query = 'SELECT * FROM récoltes';
    db.query(query, callback);
  },

  // Récupérer un Recolte par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM récoltes WHERE id = ?';
    db.query(query, [id], callback);
  },

  // Récupérer un Recolte par campagnes
  getByCampagne: (id, callback) => {
    const query = 'SELECT * FROM récoltes WHERE id_campagne = ?';
    db.query(query, [id], callback);
  },

  // Récupérer la campagne de la recolte
  getCampagne: (id, callback) => {
    const query = 'SELECT * FROM campagnes JOIN récoltes ON récoltes.id_campagne = campagnes.id WHERE récoltes.id = ?';
    db.query(query, [id], callback);
  },

  // Créer un nouvel Recolte
  create: (data, callback) => {
    const query = 'INSERT INTO récoltes SET ?';
    db.query(query, data, callback);
  },

  // Mettre à jour un Recolte
  update: (id, data, callback) => {
    const query = 'UPDATE récoltes SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },

  // Supprimer un Recolte
  delete: (id, callback) => {
    const query = 'DELETE FROM récoltes WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Récoltes;
