import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddDetails = () => {
    const navigate = useNavigate();
    //Handle submit of add use button
    const handleSubmitButton = async (event) => {
        event.preventDefault();
        navigate('/add-user-details');
    
    }

    //Handle submit of delete button
    const handleSubmitDelButton = async (event) =>{
        event.preventDefault();
        navigate('/deleteUser')

    }

    //Handles update details of User button
    const handleSubmitUpdButton = async (event) =>{
        event.preventDefault();
        navigate('/add-user-details')
    }
    // State for form inputs
    const [aadhar, setAadhar] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState(''); // State for messages
    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Prepare form data
        const formData = { aadhar, phone };

        try {
            // Submit form data to the server
            const response = await fetch('http://localhost:8081/add-details', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage('Details added successfully!');
                // Optionally reset the form
                setAadhar('');
                setPhone('');
            } else {
                alert("User already exists");
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred.');
        }
    };

    return (
        // <div className="flex flex-row p-20">
        //     {/* <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
        //         <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        //         <form onSubmit={handleSubmit}>
        //             <div className="mb-4">
        //                 <label htmlFor="aadhar" className="block text-sm font-medium text-gray-700">Aadhar Number:</label>
        //                 <input
        //                     type="text"
        //                     id="aadhar"
        //                     value={aadhar}
        //                     onChange={(e) => setAadhar(e.target.value)}
        //                     required
        //                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        //                 />
        //             </div>
        //             <div className="mb-4">
        //                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone No.:</label>
        //                 <input
        //                     type="text" // Changed to text for better phone number handling
        //                     id="phone"
        //                     value={phone}
        //                     onChange={(e) => setPhone(e.target.value)}
        //                     required
        //                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        //                 />
        //             </div>
        //             <button
        //                 type="submit"
        //                 className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        //             >
        //                 Submit
        //             </button>
        //             {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
        //         </form>
        //     </div> */}
        //     <div className="flex justify-center items-center">
        //         <button
        //             onClick={handleSubmitButton}
        //             type="submit"
        //             className="py-2 px-4 bg-black text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        //         >
        //             Add User
        //         </button>
        //     </div>
        //     <div className="flex justify-center items-center"
        //     >
        //         <button 
        //         onClick={handleSubmitDelButton}
        //         type="submit"
        //         className="py-2 px-4 bg-black text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500"
        //         >
        //             Delete User
        //         </button>
        //     </div>
        //     <div className="flex justify-center items-center"
        //     >
        //         <button 
        //         onClick={handleSubmitUpdButton}
        //         type="submit"
        //         className="py-2 px-4 bg-black text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500"
        //         >
        //             Update Details
        //         </button>
        //     </div>
        // </div>    
        <div className='flex flex-col bg-slate-400'>
            <div className='border-l-gray-800'>Hello</div>
            <div className='flex flex-col'>World <span>Anshika</span></div>
        </div>
        
    );
};

export default AddDetails;
