import User from "./user.model";

export const getUser = async (req, res) => {
  const { name } = req.query;

  const user = await User.findOne({ username: name });

  if (user) {
    res.json({
      user: user.username,
      email: user.email,
      id: user._id,
    });
    return;
  }

  res.json({
    success: false,
    message: "User not found",
  });
};