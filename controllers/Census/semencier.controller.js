const Semencier = require('../../models/semencier.model');

// Récupérer tous les Semenciers
exports.getAllSemenciers = (req, res) => {
  Semencier.getAll((err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la récupération des Semenciers' });
      return;
    }
    res.status(200).json(results);
  });
};

// Récupérer un Semencier par ID
exports.getSemencierById = (req, res) => {
  const id = req.params.id;
  Semencier.getById(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Semencier non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Créer un nouvel Semencier
exports.createSemencier = (req, res) => {
  const data = req.body;
  const nom = data.nom
  try{
    if(!nom){
      res.status(403).send({message : "Nom du Drader requis !! "})
    }
    else{
      Semencier.create(data, (err, result) => {
        if (err) {
          res.status(500).send({ message: 'Erreur lors de la création de l’Semencier' });
          return;
        }
        res.status(201).json({ id: result.insertId, ...data });
      });
    }
  } catch (e) {
    res.status(500).send({erreur: e})
  }
};

// Mettre à jour un Semencier
exports.updateSemencier = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const nom = data.nom
  try{
    if(!nom){
      res.status(403).send({message : "Nom du semencier requis !! "})
    }
    else{
      Semencier.update(id, data, (err, result) => {
        if (err || result.affectedRows === 0) {
          res.status(404).send({ message: 'Échec de la mise à jour de l’Semencier' });
          return;
        }
        res.status(200).json({ message: 'Semencier mis à jour avec succès' });
      });
    }
  } catch (e) {
    res.status(500).send({erreur: e})
  }
};

// Supprimer un Semencier
exports.deleteSemencier = (req, res) => {
  const id = req.params.id;
  Semencier.delete(id, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Semencier non trouvé' });
      return;
    }
    res.status(200).json({ message: 'Semencier supprimé avec succès' });
  });
};
