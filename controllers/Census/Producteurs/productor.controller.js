const Productor = require('../../../models/productor.model');
const Campagne = require('../../../models/campagnes.model');
const Affiliation = require('../../../models/affiliations.model');
const Recoltes = require('../../../models/recoltes.model');
const Ops = require('../../../models/op.model');


/************************   CRUD DES PRODUCTEURS  ***************************************/

// Récupérer tous les Producteurs
exports.getAllProductors = (req, res) => {
  Productor.getAll((err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la récupération des Producteurs' });
      return;
    }
    res.status(200).json(results);
  });
};

// Récupérer un Producteur par ID
exports.getProductorById = (req, res) => {
  const id = req.params.id;
  Productor.getById(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Producteur non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};



// Créer un nouvel Producteur
exports.createProductor = (req, res) => {
  const data = req.body;
  const nom = data.nom
  try{
    if(!nom){
      res.status(403).send({message : "Nom du Drader requis !! "})
    }
    else{
      Productor.create(data, (err, result) => {
        if (err) {
          res.status(500).send({ message: 'Erreur lors de la création de l’Producteur' });
          return;
        }
        res.status(201).json({ id: result.insertId, ...data });
      });
    }
  } catch (e) {
    res.status(500).send({erreur: e})
  }
};

// Mettre à jour un Producteur
exports.updateProductor = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const nom = data.nom
  try{
    if(!nom){
      res.status(403).send({message : "Nom du Drader requis !! "})
    }
    else{
      Productor.update(id, data, (err, result) => {
        if (err || result.affectedRows === 0) {
          res.status(404).send({ message: 'Échec de la mise à jour de Producteur' });
          return;
        }
        res.status(200).json({ message: 'Producteur mis à jour avec succès' });
      });
    }
  }catch (e) {
    res.status(500).send({erreur: e})
  }
};

// Supprimer un Producteur
exports.deleteProductor = (req, res) => {
  const id = req.params.id;
  Productor.delete(id, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Producteur non trouvé' });
      return;
    }
    res.status(200).json({ message: 'Producteur supprimé avec succès' });
  });
};

/****************************************************************************************/
/************************   DETAILS DU PRODUCTEURS  ***************************************/
/****************************************************************************************/


/************************   OPERATIONS SUR CAMPAGNES  ***************************************/

// Récupérer toutes les Campagnes
exports.getCampagnes = (req, res) => {
  try{
    const id = req.params.id;
    Productor.getCampagnes(id, (err, result) => {
      if (err || result.length === 0) {
        res.status(404).send({ message: 'Campagnes non trouvées', erreur: err || null });
        return;
      }
      res.status(200).json(result);
    });
  } catch(err){
    res.status(500).send({ error: err });
  }
};

// Récupérer une Campagne par ID
exports.getCampagneById = (req, res) => {
  try{
    const id = req.params.id;
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

// Récupérer une Campagne par ID
exports.getRecolteByCampagne = (req, res) => {
  try{
    const id = req.params.id;
    Recoltes.getByCampagne(id, (err, result) => {
      if (err || result.length === 0) {
        res.status(404).send({ message: 'Pas de récoltes' });
        return;
      }
      res.status(200).json(result[0]);
    });
  } catch(err){
    res.status(500).send({ error: err });
  }
};

// Récupérer toutes les Speculations
exports.getAllSpecs = (req, res) => {
  Spec.getAll((err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la récupération des Speculations' });
      return;
    }
    res.status(200).json(results);
  });
};

// Récupérer tous les Villages
exports.getAllVillages = (req, res) => {
  Village.getAll((err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la récupération des Villages' });
      return;
    }
    res.status(200).json(results);
  });
};

// Créer une nouvelle Campagne
exports.createCampagne = (req, res) => {
  const data = req.body;
  const producteur = data.id_Producteur
  const speculation = data.id_Speculation
  const village = data.id_village

  try{
    if(!producteur || !speculation || !village){
      res.status(403).send({message : "Informations de campagnes manquantes !! "})
    }
    else{
      Campagne.create(data, (err, result) => {
        if (err) {
          res.status(500).send({ message: 'Erreur lors de la création de la Campagne' });
          return;
        }
        res.status(201).json({ id: result.insertId, ...data });
      });
    }
  } catch (e) {
    res.status(500).send({erreur: e})
  }
};

// Mettre à jour un Campagne
exports.updateCampagne = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const producteur = data.id_Producteur
  const speculation = data.id_Speculation
  const village = data.id_village

  try{
    if(!producteur || !speculation || !village){
      res.status(403).send({message : "Informations de campagnes manquantes !! "})
    }
    else{
      Campagne.update(id, data, (err, result) => {
        if (err || result.affectedRows === 0) {
          res.status(404).send({ message: 'Échec de la mise à jour de l’Campagne' });
          return;
        }
        res.status(200).json({ message: 'Campagne mis à jour avec succès' });
      });
    }
  } catch (e) {
    res.status(500).send({erreur: e})
  }
};


/************************   OPERATIONS SUR AFFILIATIONS  ***************************************/

// Récupérer toutes les affiliation
exports.getAffiliations = (req, res) => {
  const id = req.params.id;
  Productor.getOps(id, (err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la récupération des producteurs' });
      return;
    }
    res.status(200).json(results);
  });
};


exports.getLeaderShip = (req, res) => {
  const id = req.params.id;
  Productor.getOpsByLeader(id, (err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la récupération des ops' });
      return;
    }
    res.status(200).json(results);
  });
};

// Récupérer un Op par ID
exports.getAffiliation = (req, res) => {
  const id = req.params.id;
  Ops.getById(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Affiliation inexistante!' });
      return;
    }
    res.status(200).json(result[0]);
  });
};


// Créer une nouvelle Affiliation
exports.createAffiliation = (req, res) => {
  const data = req.body;
  const id_Producteur = data.id_Producteur
  const id_OP = data.id_OP
  try{
    if(!id_Producteur || !id_OP){
      res.status(403).send({message : "Nom du semencier requis !! "})
    }
    else{
      this.getProductorById(id_Producteur)
      Ops.getById(id_OP)
      Affiliation.create(data, (err, result) => {
        if (err) {
          res.status(500).send({ message: 'Erreur lors de la création de la Affiliation' });
          return;
        }
        res.status(201).json({ id: result.insertId, ...data });
      });
    }
  } catch (e) {
    res.status(500).send({erreur: e})
  }
};

// Mettre à jour un Affiliation
exports.updateAffiliation = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const id_Producteur = data.id_Producteur
  const id_OP = data.id_OP
  try{
    if(!id_Producteur || !id_OP){
      res.status(403).send({message : "Nom du semencier requis !! "})
    }
    else{
      this.getProductorById(id_Producteur)
      Ops.getById(id_OP)
      Affiliation.update(id, data, (err, result) => {
        if (err || result.affectedRows === 0) {
          res.status(404).send({ message: 'Échec de la mise à jour de l\’Affiliation' });
          return;
        }
        res.status(200).json({ message: 'Affiliation mis à jour avec succès !' });
      });
    }
  } catch (e) {
    res.status(500).send({erreur: e})
  }
};

// Supprimer une Affiliation
exports.deleteAffiliation = (req, res) => {
  const id_prod = req.params.prod;
  const id_op = req.params.id_op;
  Affiliation.delete(id_prod, id_op, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Affiliation non trouvé' });
      return;
    }
    res.status(200).json({ message: 'Affiliation supprimé avec succès !' });
  });
};
