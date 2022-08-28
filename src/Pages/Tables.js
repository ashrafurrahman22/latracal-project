import React from 'react';
import useNotes from '../Hooks/useNotes';
import SingleNote from './Home/SingleNote';

const Tables = () => {

    const[notes] = useNotes();
    console.log(notes)

    return (
        <div style={{fontFamily:"inter"}}>
            <h2 className='uppercase text-xl text-center font-bold mb-5'>Parking List</h2>
            <hr />

            <div class="overflow-x-auto">
  <table class="table table-zebra text-black w-full">
    {/* <!-- head --> */}
    <thead className='text-center'>
      <tr>
        <th>Driver Name</th>
        <th>Vihicles Number</th>
        <th>Check in</th>
        <th>Check Out</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody className='text-center font-medium text-md'>
    {
                    notes.map(note => 
                    <SingleNote
                    key={note._id}
                    note = {note}
                    ></SingleNote>
                        )
                }
    </tbody>
  </table>
</div>

        </div>
    );
};

export default Tables;