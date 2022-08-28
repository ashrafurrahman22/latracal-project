import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useNoteDetails from '../../Hooks/useNoteDetails';

const SingleNote = ({note}) => {
  // console.log(note)
  const {checkIn, checkOut, name, vihicleNumber} = note;

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const {notesId} = useParams();

  const navigateToDetails = id =>{
    navigate(`/note/${id}`)
}

    const onSubmit = data =>{
      console.log("clicked")
      const url = `https://secret-plains-16747.herokuapp.com/parking/${notesId}`
      fetch(url, {
        method : 'PUT',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
        console.log('success', data);
        toast.success('Parking data Successfully');
        reset();
      })
    }

    


    // delete
    const handleDelete = id =>{
        const procede = window.confirm('Are You Sure?');
        if(procede){
          const url = `https://secret-plains-16747.herokuapp.com/parking/${id}`
          fetch(url, {
            method : "DELETE"
          })
          .then(res => {
              res.json()
            toast.success("Successfully deleted")
            })
          .then(data => {
            console.log(data)
          })
        }
      }


    return (
        <tr>
        <td className=''>{name}</td>
        <td className=''>{vihicleNumber}</td>
        <td className=''>{checkIn}</td>
        <td className=''>{checkOut}</td>
          {/* <td><button className='btn btn-primary'>Edit</button></td> */}
          <td>
          <label onClick={()=>navigateToDetails(note._id)} for="my-modal-3" class="btn modal-button">
            <small>Edit</small>
            <FontAwesomeIcon className='pl-2' icon={faPenToSquare}></FontAwesomeIcon>
          </label>
          <input type="checkbox" id="my-modal-3" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box relative">
              {/* <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}
              <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">x</label>

              <div className='py-5 flex justify-center items-center'>

           <form for="my-modal-3" className='flex flex-col p-6 items-center gap-3' onSubmit={handleSubmit(onSubmit)}>
           <input type="text" placeholder="Driver Name"  class="input input-bordered w-96 max-w-xl mb-2" {...register("name")} required />
<input type="number" placeholder="Vihicle Number"  class="input input-bordered w-96 max-w-xl mb-2" {...register("vihicleNumber")} required />
<input type="text" placeholder="Your Check in Time"  class="input input-bordered w-96 max-w-xl mb-2" {...register("checkIn")} required />

<input type="text" placeholder="Your Check Out Time"  class="input input-bordered w-96 max-w-xl mb-2" {...register("checkOut")} required />

      <input className='rounded px-5 btn btn-primary' type="submit" value="Update"/>
      </form>
           </div>
           

            </div>
          </div>

          </td>


        <td><button onClick={()=>handleDelete(note._id)}  className='btn hover:btn-warning bg-yellow-400 border-0 text-black'>
          <small>Delete</small>
        <FontAwesomeIcon className='pl-2' icon={faTrash} />
        </button></td>

      </tr>
    );
};

export default SingleNote;