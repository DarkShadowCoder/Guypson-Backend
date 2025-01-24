const db = require('../config/db.config');

// Modèle OP
const ops = {
  // Récupérer tous les ops
  getAll: (callback) => {
    const query = 'SELECT * FROM ops';
    db.query(query, callback);
  },

  // Récupérer un OPs par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM ops WHERE id = ?';
    db.query(query, [id], callback);
  },

  // Recupere les informations sur le leader de OP
  getLeader: (id, callback) => {
    const query = 'SELECT * FROM producteurs JOIN ops ON ops.leader = producteurs.id WHERE ops.id = ?';
    db.query(query, [id], callback);
  },

  // Recuperer toutes les campagnes d'une OP
  getCampagnes: (callback) => {
    const query = 'SELECT * FROM campagnes WHERE id_OP = ?';
    db.query(query, callback);
  },

  // Recuperer tous les membres de l'OP
  getMembres: (id, callback) => {
    const query = 'SELECT * FROM producteurs JOIN affiliation ON producteurs.id = affiliation.id_Producteur JOIN ops ON affiliation.id_OP = ops.id WHERE ops.id = ?';
    db.query(query, [id], callback);
  },

  // Créer un nouvel OP
  create: (data, callback) => {
    const query = 'INSERT INTO ops SET ?';
    db.query(query, data, callback);
  },

  

  // Mettre à jour un OP
  update: (id, data, callback) => {
    const query = 'UPDATE ops SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },

  // Supprimer un OPs
  delete: (id, callback) => {
    const query = 'DELETE FROM ops WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = ops;
