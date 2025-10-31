const db = require("../models");
const Forfait = db.forfaits;

// Créer un forfait
exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({ message: "The name is required!" });
    return;
  }

  Forfait.create(req.body)
    .then((data) => res.send(data))
    .catch((err) =>
      res
        .status(500)
        .send({ message: err.message || "Erreur création forfait." })
    );
};

// Lister tous les forfaits
exports.findAll = (req, res) => {
  Forfait.findAll()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: err.message }));
};

// Trouver un forfait par ID
exports.findOne = (req, res) => {
  const id = req.params.id;
  Forfait.findByPk(id)
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: err.message }));
};

// Mettre à jour un forfait
exports.update = (req, res) => {
  const id = req.params.id;
  Forfait.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) res.send({ message: "Updated successfully." });
      else res.send({ message: "No changes made." });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

// Supprimer un forfait
exports.delete = (req, res) => {
  const id = req.params.id;
  Forfait.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) res.send({ message: "Deleted successfully." });
      else res.send({ message: "Plan not found." });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};
