import Button from "./Button";
import Input from "./Input";

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server";

import { useDispatch, useStore } from "react-redux";
import { chooseName, chooseEmail, chooseAddress, choosePhone } from "../redux/slices/RootSlice";

// interface
interface ContactFormProps{
    id?: string,
    data?: {}
}

const ContactForm = (props: ContactFormProps) => {
    const {register, handleSubmit} = useForm({})

    const dispatch = useDispatch();//let's you use the slices
    const store = useStore();

// the any means we don't care what datatype
const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${props.id}`);//let's you see which one you actually target
    if (props.id) {
        server_calls.update(props.id, data)
        console.log(`Updated: ${data} ${props.id}`)
        setTimeout(() => {window.location.reload()}, 1000);//sets a delay for the page to reload
        event.target.reset()
    } else {
        //use dispatch to update state in our store
        dispatch(chooseName(data.name));
        dispatch(chooseEmail(data.email));
        dispatch(choosePhone(data.phone_number));
        dispatch(chooseAddress(data.address));

        server_calls.create(store.getState())
        setTimeout(() => {window.location.reload()}, 1000);
    }

};

    return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div>
            <label htmlFor="name">Contact name</label>
            {/* add input component here */}
            <Input {...register('name')} name = 'name' placeholder="Name"/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            {/* add input component here */}
            <Input {...register('email')} name = 'email' placeholder="Email"/>
        </div>
        <div>
            <label htmlFor="phone_number">Phone Number</label>
            {/* add input component here */}
            <Input {...register('phone_number')} name = 'phone_number' placeholder="Phone Number"/>
        </div>
        <div>
            <label htmlFor="address">Contact Address</label>
            {/* add input component here */}
            <Input {...register('address')} name = 'address' placeholder="Address"/>
        </div>
        <div className="flex p-1">
            <Button 
            className="flex justify-start m-3 bg-slate-300 p-2 rounded 
            hover:bg-slate-800 text-white">
                Submit
            </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
