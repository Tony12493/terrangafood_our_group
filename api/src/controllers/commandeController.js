// api/src/controllers/commandeController.js

exports.create = async (req, res) => {
    res.status(201).json({ message: "Route CREATE fonctionnelle" });
};

exports.getAll = async (req, res) => {
    res.status(200).json([]);
};

exports.getById = async (req, res) => {
    res.status(200).json({ message: "Route GET BY ID fonctionnelle" });
};

exports.updateStatut = async (req, res) => {
    res.status(200).json({ message: "Route UPDATE fonctionnelle" });
};

exports.delete = async (req, res) => {
    res.status(200).json({ message: "Route DELETE fonctionnelle" });
};