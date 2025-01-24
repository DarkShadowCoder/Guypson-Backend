// Récupérer les op du producteur
exports.getOpByProductor = (req, res) => {
    const id = req.params.id;
    Productor.getOp(id, (err, result) => {
      if (err || result.length === 0) {
        res.status(404).send({ message: 'Op non trouvé' });
        return;
      }
      res.status(200).json(result[0]);
    });
  };