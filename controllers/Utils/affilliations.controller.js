const Affiliation = require('../../models/affiliations.model');

// Récupérer toutes les affiliation
exports.getAllaffiliation = (req, res) => {
  Affiliation.getAll((err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la récupération des affiliation' });
      return;
    }
    res.status(200).json(results);
  });
};

// Récupérer une Affiliation par ID
exports.getAffiliationById = (req, res) => {
  const id = req.params.id;
  Affiliation.getById(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Affiliation non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};


// Récupérer une Affiliation par Producteur
exports.getAffiliationByProd = (req, res) => {
  const id = req.params.id;
  Affiliation.getByProducteurs(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Affiliation non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};


// Récupérer une Affiliation par OP
exports.getAffiliationByOp = (req, res) => {
  const id = req.params.id;
  Affiliation.getByOp(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Affiliation non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Créer une nouvelle Affiliation
exports.createAffiliation = (req, res) => {
  const data = req.body;
  Affiliation.create(data, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la création de la Affiliation' });
      return;
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

// Mettre à jour un Affiliation
exports.updateAffiliation = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Affiliation.update(id, data, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Échec de la mise à jour de l’Affiliation' });
      return;
    }
    res.status(200).json({ message: 'Affiliation mis à jour avec succès' });
  });
};

// Supprimer une Affiliation
exports.deleteAffiliation = (req, res) => {
  const id = req.params.id;
  Affiliation.delete(id, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Affiliation non trouvé' });
      return;
    }
    res.status(200).json({ message: 'Affiliation supprimé avec succès' });
  });
};
