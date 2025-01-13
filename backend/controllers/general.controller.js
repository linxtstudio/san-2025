const path = require("path");

const welcome = async (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Welcome to SAN 2025 backend!",
  });
};

const upload = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      status: 400,
      message: "No file uploaded",
    });
  }

  res.status(200).json({
    status: 200,
    message: "File uploaded successfully",
    data: {
      filename: req.file.filename,
    },
  });
};

const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = path.join(__dirname, "../public/uploads/");

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

module.exports = {
  welcome,
  upload,
  download,
};
