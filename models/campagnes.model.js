const db = require('../config/db.config');

// Modèle Campagne
const Campagne = {
  // Récupérer tous les campagnes
  getAll: (callback) => {
    const query = 'SELECT * FROM campagnes';
    db.query(query, callback);
  },


  // Récupérer un Campagne par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM campagnes WHERE id = ?';
    db.query(query, [id], callback);
  },

  // Récupérer un Campagne par Producteur
  getByProducteur: (id, callback) => {
    const query = 'SELECT * FROM campagnes WHERE id_Producteur = ?';
    db.query(query, [id], callback);
  },

  // Recuperation des producteurs d'une campagnes
  getProd: (id_campagne,callback) =>{
    const query = 'SELECT * FROM producteurs JOIN campagnes ON campagnes.id_Producteur = producteurs.id WHERE campagnes.id = ?'
    db.query(query, [id_campagne], callback)
  },

  // Récupérer un Campagne par OP
  getByOp: (id, callback) => {
    const query = 'SELECT * FROM campagnes WHERE id_OP = ?';
    db.query(query, [id], callback);
  },

  // Recuperation des OP d'une campagnes
  getOp: (id_campagne,callback) =>{
    const query = 'SELECT * FROM ops JOIN campagnes ON campagnes.id_OP = ops.id WHERE campagnes.id = ?'
    db.query(query, [id_campagne], callback)
  },


  // Récupérer un Campagne par speculation
  getBySpeculation: (id, callback) => {
    const query = 'SELECT * FROM campagnes WHERE id_Speculation = ?';
    db.query(query, [id], callback);
  },

  // Recuperation des producteurs d'une campagnes
  getSpec: (id_campagne,callback) =>{
    const query = 'SELECT * FROM speculations JOIN campagnes ON campagnes.id_Speculation = speculations.id WHERE campagnes.id = ?'
    db.query(query, [id_campagne], callback)
  },


  // Récupérer un Campagne par village
  getByVillage: (id, callback) => {
    const query = 'SELECT * FROM campagnes WHERE id_village = ?';
    db.query(query, [id], callback);
  },

  // Recuperation les villages d'une campagnes
  getVillage: (id_campagne,callback) =>{
    const query = 'SELECT * FROM villages JOIN campagnes ON campagnes.id_village = villages.id WHERE campagnes.id = ?'
    db.query(query, [id_campagne], callback)
  },

  // Recuperer les producteurs de la campagne
  getProducteurs: (id, callback) => {
    const query = 'SELECT * FROM producteurs JOIN campagnes ON producteurs.id = campagnes.id_Producteur WHERE campagnes.id = ?';
    db.query(query, [id], callback);
  },


  // Recuperer une Campaggne par village et par speculation
  getBySpeculationAndVillage: (id_village,id_spec, callback) => {
    const query = 'SELECT * FROM campagnes WHERE id_Speculation = ? AND id_village = ?';
    db.query(query, [id_spec, id_village], callback);
  },
  // Créer un nouvel Campagne
  create: (data, callback) => {
    const query = 'INSERT INTO campagnes SET ?';
    db.query(query, data, callback);
  },

  // Mettre à jour un Campagne
  update: (id, data, callback) => {
    const query = 'UPDATE campagnes SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },

  // Supprimer un Campagne
  delete: (id, callback) => {
    const query = 'DELETE FROM campagnes WHERE id = ?';
    db.query(query, [id], callback);
  },

  // Recuperation des recoltes d'une campagnes
  getRecoltes: (id_campagne,callback) =>{
    const query = 'SELECT * FROM recoltes WHERE id_campagne = ?';
    db.query(query, [id_campagne], callback);
  },
};


module.exports = Campagne;
