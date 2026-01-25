import { Router } from "express";
import{
    createOrder,
    getCustomerOrders,
    UpdateOrder,
    deleteOrder
} from "../controllers/order.controller";
const router=Router();
router.post("/add-order", createOrder);
router.get("/get-my-orders/:customerId",getCustomerOrders);
router.put("/upadte-oredr/:orederId",UpdateOrder);
router.delete("/delete-order/:orderId", delteOredr);
export default router;