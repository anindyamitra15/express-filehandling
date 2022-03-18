const Root = async (req, res) => {
  res.render("fileHandleHome");
};

const FileUpload = async (req, res) => {
  if (!req.files) {
    return res.status(400).send("No files were uploaded.");
  }
  const file = req.files.myFile;
  res.send("Thanks");
};
const FileHandleController = { Root, FileUpload };

export default FileHandleController;
