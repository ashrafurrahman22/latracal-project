import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Tables from '../Tables';
import Navbar from './Navbar';

const Home = () => {



    const { register, handleSubmit, reset } = useForm();

  
  const onSubmit = data => {
    console.log(data)

    axios.post('https://secret-plains-16747.herokuapp.com/parking', data)
    .then(response =>{
      const {data} = response;
      console.log(response);
        if(data.insertedId){
        reset();
        toast.success('parking added');
        }
    });
  };



    return (
        <div className='min-h-screen p-5 flex justify-center items-center w-full bg-slate-700'> 
            <div className='card pb-10 bg-base-100 text-black shadow-2xl w-2/3'>

            <h2 style={{fontFamily:"poppins"}} className='text-center pt-8 text-2xl font-semibold'>Parking-App</h2>

           <div className='py-5 flex justify-center items-center'>

           <form className='flex flex-col items-center gap-3' onSubmit={handleSubmit(onSubmit)}>
           <input type="text" placeholder="Driver Name"  class="input input-bordered w-96 max-w-xl mb-2" {...register("name")} required />
<input type="number" placeholder="Vihicle Number"  class="input input-bordered w-96 max-w-xl mb-2" {...register("vihicleNumber")} required />
<input type="text" placeholder="Your Check in Time"  class="input input-bordered w-96 max-w-xl mb-2" {...register("checkIn")} required />

<input type="text" placeholder="Your Check Out Time"  class="input input-bordered w-96 max-w-xl mb-2" {...register("checkOut")} required />

      <input className='rounded px-5 w-2/3 btn btn-primary' type="submit" value="add Parking"/>
      </form>
           </div>

            <div>
                <Tables></Tables>
            </div>

        </div>
        </div>
    );
};

export default Home;