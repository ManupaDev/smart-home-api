import Location from "../models/Location.js";

export const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    return res.status(200).json(locations);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

export const getLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id).populate("devices").exec();
    if (!location) {
      return res.status(404).send(location);
    }
    return res.status(200).send(location);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

export const createLocation = async (req, res) => {
  try {
    const location = req.body;
    await Location.create(location);
    return res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

export const deleteLocation = async (req, res) => {
  try {
    const { id } = req.params;
    await Location.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

