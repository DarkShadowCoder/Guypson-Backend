const { json } = require('body-parser');
const db = require('../../config/db.config');
const Village = require('./village.model');

// Modèle Pas 
const Pas = {
  // Récupérer tous les pas
  getAll: (callback) => {
    const query = 'SELECT * FROM pas';
    db.query(query, callback);
  },

  // Récupérer un Pas par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM pas WHERE id = ?';
    db.query(query, [id], callback);
  },
  // Récupérer un Pas par Daader
  getByDaader: (id, callback) => {
    const query = 'SELECT * FROM pas WHERE id_DAADER = ?';
    db.query(query, [id], callback);
  },

  // Recuperer les villages du pas
  getVillages: (id, callback) => {
    const query = 'SELECT * FROM villages JOIN pas ON pas.id = villages.id_PAS WHERE villages.id = ?';
    db.query(query, [id], callback);
  },

  // Recuperer le daader du pa
  getDaader: (id, callback) => {
    const query = 'SELECT * FROM daaders JOIN pas ON pas.id_DAADER = daaders.id WHERE pas.id = ?';
    db.query(query, [id], callback);
  },

  // Recuperer les campagnes de la pa
  getCampagnes: (id, callback) => {
    const query = 'SELECT * FROM campagnes JOIN villages ON villages.id = campagnes.id_village JOIN pas ON villages.id_PA = pas.id WHERE pas.id = ?';
    db.query(query, [id], callback);
  },

  // Créer un nouvel Pas
  create: (data, callback) => {
    const query = 'INSERT INTO pas SET ?';
    db.query(query, data, callback);
  },

  // Mettre à jour un Pas
  update: (id, data, callback) => {
    const query = 'UPDATE pas SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },

  // Supprimer un Pas
  delete: (id, callback) => {
    const query = 'DELETE FROM pas WHERE id = ?';
    db.query(query, [id], callback);
  },
  
  
};

module.exports = Pas;
