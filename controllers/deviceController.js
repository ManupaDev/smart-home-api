import NotFoundError from "../errors/not-found-error.js";
import Device from "../models/Device.js";

export const getAllDevices = async (req, res) => {
  try {
    const devices = await Device.find()
      .populate("location")
      .select("name location")
      .exec();
    return res.status(200).json(devices);
  } catch (error) {
    next(error);
  }
};

export const getDevice = async (req, res, next) => {
  try {
    const { id } = req.params;
    const device = await Device.findById(id).populate("location").exec();
    if (!device) {
      throw new NotFoundError();
    }
    return res.status(200).send(device);
  } catch (error) {
    next(error);
  }
};

export const createDevice = async (req, res, next) => {
  try {
    const device = req.body;
    console.log(device);
    await Device.create(device);
    return res.status(201).send();
  } catch (error) {
    next(error);
  }
};

export const deleteDevice = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Device.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const fullyUpdateDevice = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const found = Device.findOne({ _id: id });
    if (!found) {
      throw new NotFoundError();
    }
    await Device.findByIdAndUpdate(id, {
      name: data.name,
      state: data.state,
      image: data.image,
      location: data.location,
    });

    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const partiallyUpdateDevice = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const found = await Device.findOne({ _id: id });
    if (!found) {
      throw new NotFoundError();
    }
    await Device.findByIdAndUpdate(id, {
      state: data.state,
    });
    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};
