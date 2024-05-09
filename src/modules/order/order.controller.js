import orderModel from "../../../DB/model/Order.model.js";

export const DisplayTraking = async (req, res) => {
  try {
    const orders = await orderModel.findOne({ userId: req.user._id });
    console.log(orders);
    return res.json({ message: "succes", orders });
  } catch (error) {
    return res.json({ message: "error", error: error.stack });
  }
};

export const addTraking = async (req, res) => {
  try {
    const { product } = req.params;
    const { status, timeRemaining, totalPrice } = req.body;
    const order = await orderModel.create({
      userId: req.user._id,
      orderTracking: [
        {
          productTracking: {
            product: product,
            status: status,
            timeRemaining: timeRemaining,
          },
        },
      ],
      totalPrice: totalPrice,
    });
    return res.json({ message: "succes", order });
  } catch (error) {
    return res.json({ message: "error", error: error.stack });
  }
};

export const editStatus = async (req, res) => {
  try {
    const { status, timeRemaining } = req.body;
    const order = await orderModel.updateOne(
      { product: req._product },
      { status, timeRemaining }
    );
    return res.json({ message: "succes", order });
  } catch (error) {
    return res.json({ message: "error", error: error.stack });
  }
};

export const deleteTraking = async (req, res) => {
  try {
    const { product } = req.params;
    const traking = await orderModel.deleteOne({ _product: product });
    return res.json({ message: "succes", traking });
  } catch (error) {
    return res.json({ message: "error", error: error.stack });
  }
};
