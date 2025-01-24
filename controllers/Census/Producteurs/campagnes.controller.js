const session = require('express-session');
const Campagne = require('../../../models/campagnes.model');
const Recoltes = require('../../../models/recoltes.model');

// Récupérer toutes les Campagnes
exports.getAllCampagnes = (req, res) => {
  Campagne.getAll((err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la récupération des Campagnes' });
      return;
    }
    res.status(200).json(results);
  });
};

// Récupérer une Campagne par ID
exports.getCampagneById = (req, res) => {
  try{
    const id = req.params.id;
    const role = session.user.id_drader || session.user.id_ddader || session.user.id_daader || session.user.pas || session.user.id_village

    Campagne.getById(id, (err, result) => {
      if (err || result.length === 0) {
        res.status(404).send({ message: 'Campagne non trouvé' });
        return;
      }
      res.status(200).json(result[0]);
    });
  } catch(err){
    res.status(500).send({ error: err });
  }
};

// Récupérer une Campagne par OP
exports.getCampagneByOp = (req, res) => {
  const id = req.params.id;
  Campagne.getByOp(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Campagne non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Récupérer une Campagne par Producteur
exports.getCampagneByProd = (req, res) => {
  const id = req.params.id;
  Campagne.getByProducteur(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Campagne non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Récupérer une Campagne par Speculation
exports.getCampagneBySpec = (req, res) => {
  const id = req.params.id;
  Campagne.getBySpeculation(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Campagne non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Récupérer une Campagne par Village
exports.getCampagneByVillage = (req, res) => {
  const id = req.params.id;
  Campagne.getByVillage(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Campagne non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};



// Créer une nouvelle Campagne
exports.createCampagne = (req, res) => {
  const data = req.body;
  Campagne.create(data, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la création de la Campagne' });
      return;
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

// Mettre à jour un Campagne
exports.updateCampagne = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Campagne.update(id, data, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Échec de la mise à jour de l’Campagne' });
      return;
    }
    res.status(200).json({ message: 'Campagne mis à jour avec succès' });
  });
};

// Supprimer une Campagne
exports.deleteCampagne = (req, res) => {
  const id = req.params.id;
  Campagne.delete(id, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Campagne non trouvé' });
      return;
    }
    res.status(200).json({ message: 'Campagne supprimé avec succès' });
  });
};

/*******************************************************************************************/
/*

// Recuperer les campagnes et les informations de recoltes
exports.getCampagneAndRecolte = (req, res) => {
  try{
    const id_recolte = req.params.recolte;
    const id_campagne = req.params.campagne

    Campagne.getById(id_campagne, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Campagne non trouvé' });
      return;
    }

    Recoltes.getByCampagne(id_recolte, (err, result) => {
      if (err || result.length === 0) {
        res.
      }
    })
    res.status(200).json(result[0]);
    });
    
  } catch(err){
    res.status(500).send({ error: err });
  }
};

*/