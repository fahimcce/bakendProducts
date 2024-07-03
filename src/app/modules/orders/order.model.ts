import { Schema, model, connect } from 'mongoose';
import { OrderInterface } from './order.interface';

const orderSchema = new Schema<OrderInterface>({
    email:{type:String,required:true},
    productId:{type:String,required:true},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true}
})


export const orderModel = model<OrderInterface>('order',orderSchema);