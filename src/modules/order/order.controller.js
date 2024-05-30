import orderModel from "../../../DB/model/Order.model.js";
//This code was created by Rajaa
export const DisplayTracking = async (req, res) => {
  try {
    const orders = await orderModel.findOne({ userId: req.user._id });
    console.log(orders);
    return res.json({ message: "success", orders });
  } catch (error) {
    return res.json({ message: "error", error: error.stack });
  }
};
//This code was created by Rajaa
export const addTracking = async (req, res) => {
  try {
    const product = req.user.product;  
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

    return res.json({ message: "success", order });
  } catch (error) {
    return res.json({ message: "error", error: error.stack });
  }
};

//This code was created by Rajaa
export const editStatus = async (req, res) => {
  try {
    const { status, timeRemaining } = req.body;
    const product = req.user.product;  

    const order = await orderModel.updateOne(
      { product: product }, 
      { 
        $set: {
          'orderTracking.$[elem].productTracking.status': status,
          'orderTracking.$[elem].productTracking.timeRemaining': timeRemaining
        }
      },
      {
        arrayFilters: [{ 'elem.productTracking.product': product }]
      }
    );

    return res.json({ message: "success", order });
  } catch (error) {
    return res.json({ message: "error", error: error.stack });
  }
};

//This code was created by Rajaa
export const deleteTracking = async (req, res) => {
  try {
    const product = req.user.product; 
    const tracking = await orderModel.deleteOne({ product: product }); 
    return res.json({ message: "success", tracking });
  } catch (error) {
    return res.json({ message: "error", error: error.stack });
  }
};


