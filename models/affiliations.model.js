const db = require('../config/db.config');

// Modèle Affiliation
const Affiliation = {
  // Récupérer tous les affiliations
  getAll: (callback) => {
    const query = 'SELECT * FROM affiliations';
    db.query(query, callback);
  },

  // Récupérer un Affiliation par Producteur
  getByProducteurs: (id, callback) => {
    const query = 'SELECT * FROM affiliations WHERE id_Producteur = ?';
    db.query(query, [id], callback);
  },

  // Récupérer un Affiliation par OP
  getByOp: (id, callback) => {
    const query = 'SELECT * FROM affiliations WHERE id_OP = ?';
    db.query(query, [id], callback);
  },
/*
  // Recuperer tous les producteur d'une affiliation
  getProd: (id_prod, id_OP) =>{
    const query = 'SELECT * FROM producteurs WHERE id_OP'
  }

*/

  // Créer un nouvel Affiliation
  create: (data, callback) => {
    const query = 'INSERT INTO affiliations SET ?';
    db.query(query, data, callback);
  },

  // Mettre à jour un Affiliation
  update: (id, data, callback) => {
    const query = 'UPDATE affiliations SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },

  // Supprimer un Affiliation
  delete: (id, callback) => {
    const query = 'DELETE FROM affiliations WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Affiliation;
