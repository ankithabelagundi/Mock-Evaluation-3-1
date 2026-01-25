import{supabase} from "../config/supabase";
export const createOrder = async (req,res)=>{
    const {produt_name, quantity, price, customerId}= req.body;
    if(!produt_name||quantity||price||customerId){
        return res.status(400).json({error:"Missing fields"});

    }
    const {date:customer}=await supabase 
    .from("customers")
    .select("id")
    .eq("id",customerId)
    .single();
    if(!customer){
        return res.status(404).json({error:"Customer not found"});
    }
    const{data,error}=await supabase
    .from("orders")
    .insert([{
        product_name,
        quantity,
        price,
        customer_id:customerId
    }])
    .select()
    .single();
    if (error){
return res.status(500).json({error:error,message});
    }
    res.status(201).json(data);
};
export const getCustomerOrders = async (req,res)=>{
    const{customerId}=req.params;
    const{data:customer}=await supabase
    .from("customers")
    .select("id")
    .eq("id",customerId)
    .single();
    if(!customer){
        return res.status(404).json({error:"Customer not found"});
    }
    const {data,error}=await supabase
    .from("orders")
    .select("*")
    .eq("customer_id",customerId);
    if(error){
        return res.status(500).json({error:error.message});
    }
    res.json(data);
};
export const UpdateOrder= async(req,res)=>
{
    const{ordreId}=req.params;
    const{quantity,price,oreder_status}=req.body;
    const{dat:order}=await supabase
    .from("orders")
    .select("id")
    .eq("id",orderId)
    .single();
    if(!order){
        return res.status(404).json ({error:"order not found "});
    }
    const {error}=await supabase
    .from("orders")
    .update({quantity,price,order_status})
    .eq("id",orderId);
    if (error){
        return res.status(500).json({error:error.message});

    }
    res.json({message:"Order updated sucessfully"});
};
export const deleteOrder=async(req,res)=>{
    const{orderId}=req.params;
    const{data:order}=await supabase 
    .from("orders")
    .select("id")
    .eq("id",oredrId)
    .single();
    if(!order){
        return res.status(404).json({error:"order not found"});
    }
    const{error}=await supabase
    .from("orders")
    .delete()
    .eq("id",orderId);
    if(error){
        return res.status(500).json({error:error.message});
    }
    res.json({message:"oredr deleted sucessfully"});
}