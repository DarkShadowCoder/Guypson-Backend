const db = require('../config/db.config');

// Modèle Producteur
const Productor = {
  // Récupérer tous les Producteurs
  getAll: (callback) => {
    const query = 'SELECT * FROM producteurs';
    db.query(query, callback);
  },

  // Récupérer un Producteur par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM producteurs WHERE id = ?';
    db.query(query, [id], callback);
  },

  // Récupérer tous les ops correspondant au producteur
  getOps: (id, callback) => {
    const query = 'SELECT * FROM ops JOIN affiliation ON ops.id = affiliation.id_OP JOIN producteurs ON affiliation.id_Producteur = producteurs.id WHERE producteurs.id = ?';
    db.query(query, [id], callback);
  },

  // Recuperer les campagnes du producteurs
  getCampagnes: (id, callback) => {
    const query = 'SELECT * FROM campagnes JOIN producteurs ON producteurs.id = campagnes.id_Producteur WHERE producteurs.id = ?';
    db.query(query, [id], callback);
  },

  // Recuperer toutes les ops où le producteurs est leader
  getOpsByLeader: (id, callback) => {
    const query = 'SELECT * FROM ops JOIN producteurs ON producteurs.id = ops.leader WHERE producteurs.id = ?';
    db.query(query, [id], callback);
  },

  // Créer un nouvel Producteur
  create: (data, callback) => {
    const query = 'INSERT INTO producteurs SET ?';
    db.query(query, data, callback);
  },

  // Mettre à jour un Producteur
  update: (id, data, callback) => {
    const query = 'UPDATE producteurs SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },

  // Supprimer un Producteur
  delete: (id, callback) => {
    const query = 'DELETE FROM producteurs WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Productor;
