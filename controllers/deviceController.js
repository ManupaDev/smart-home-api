const devices = [];

export const getAllDevices = (req, res) => {
  try {
    return res.status(200).json(devices);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

export const getDevice = (req, res) => {
  try {
    const { id } = req.params;
    const device = devices.find((el) => el.id === parseInt(id));
    console.log(device);
    if (!device) {
      return res.status(404).send();
    }
    return res.status(200).send(device);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

export const createDevice = (req, res) => {
  try {
    const device = req.body;
    const found = devices.find((el) => el.id === parseInt(device.id));
    if (found) {
      return res.status(400).send();
    }
    devices.push(device);
    return res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

export const deleteDevice = (req, res) => {
  try {
    const { id } = req.params;
    const deviceIndex = devices.findIndex((el) => el.id === parseInt(id));
    if (deviceIndex === -1) {
      return res.status(404).send();
    }
    res.status(204).send();
    devices.splice(deviceIndex, 1);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

export const fullyUpdateDevice = (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const found = devices.find((el) => el.id === parseInt(id));
    if (!found) {
      return res.status(404).send();
    }
    found.name = data.name;
    found.state = data.state;
    found.location = data.location;
    return res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

export const partiallyUpdateDevice = (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const found = devices.find((el) => el.id === parseInt(id));
    if (!found) {
      return res.status(404).send();
    }
    found.state = data.state;
    return res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};
