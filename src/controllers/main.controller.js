const date = new Date;

const Root = async (req, res) => {
  res.send(`Server is running since ${date}`);
};

export { Root };
