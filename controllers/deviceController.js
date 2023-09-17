import Device from "../models/Device.js";

export const getAllDevices = async (req, res) => {
  try {
    const devices = await Device.find();
    return res.status(200).json(devices);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

export const getDevice = async (req, res) => {
  try {
    const { id } = req.params;
    const device = await Device.findById(id);
    if (!device) {
      return res.status(404).send(device);
    }
    return res.status(200).send(device);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

export const createDevice = async (req, res) => {
  try {
    const device = req.body;
    await Device.create(device);
    return res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

export const deleteDevice = async (req, res) => {
  try {
    const { id } = req.params;
    await Device.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

export const fullyUpdateDevice = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const found = Device.findOne({ _id: id });
    if (!found) {
      return res.status(404).send();
    }
    await Device.findByIdAndUpdate(id, {
      name: data.name,
      state: data.state,
      image: data.image,
      location: data.location,
    });

    return res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

export const partiallyUpdateDevice = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const found = Device.findOne({ _id: id });
    if (!found) {
      return res.status(404).send();
    }
    await Device.findByIdAndUpdate(id, {
      state: data.state,
    });
    return res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};
