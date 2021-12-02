import User from "../models/user.model";
import Message from "../models/message.model";

export const getMessages = async (req, res, next) => {
  const { skip = 0 } = req.query;

  try {
    var messages = await Message.find({})
      .sort({ time: "desc" })
      .skip(+skip)
      .limit(10)
      .populate([
        {
          path: "author",
          model: User,
          select: "username avatar admin",
        },
      ]);

    res.json({ success: true, messages });
  } catch (e) {
    res.json({ success: false, message: e });
  }
};
