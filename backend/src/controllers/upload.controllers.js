export const createProduct = (req, res) => {
  try {
    res.status(200).json({ url: "http://localhost:4000/" + req.body.Image });
  } catch (error) {
    console.error(error);
  }
};
