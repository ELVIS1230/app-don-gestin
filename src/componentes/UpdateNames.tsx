import axios from 'axios';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';


export function Modal({ show, handleClose, itemID, endpoint }: any) {
  const [form, setForm] = useState({
    name: '',
    description: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    description: '',
  });
  const validateLetters = (data: any) => {
    return /^[a-zA-Z\s]{1,30}$/.test(data);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const validate = () => {
    let tempErrors = { name: '', description: '' };
    let isValid = true;


    if (!form.name || !form.description) {
      tempErrors.name = 'Completa los todos los campos';
      isValid = false;
    }
    if (!validateLetters(form.name)) {
      tempErrors.name = 'El nombre solo debe contener letras y espacios';
      isValid = false;
    }

    if (!validateLetters(form.description)) {
      tempErrors.description = 'La descripción solo debe contener letras y espacios';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validate()) {
      // const body = {
      //   trasac_name:form.name,
      //   trasac_description:form.description
      // }

      console.log(`Enpoint ${endpoint}/${itemID}---Body: ${form}`)                
      
      try {
        let response;
        if (endpoint == 'transactions') {
          response = await axios.put(`http://localhost:3000/api/${endpoint}/${itemID}`, form);  
          console.log(response.data);  
        } else {
          response = await axios.patch(`http://localhost:3000/api/${endpoint}/${itemID}`, form);  
          console.log(response.data);  
        }
                           
        if (response) {
          handleClose()
          window.location.reload();
        }
      } catch (error) {
        console.error(error);
      }   
      
    }
  }


  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${show ? 'block' : 'hidden'
        }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Renombrar</h2>
        <div>
          <input
            name="name"
            type="text"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          <input
            name="description"
            type="text"
            placeholder="Descripción"
            value={form.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            required
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => {
              handleClose();
            }}
            className="bg-neutral-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="bg-neutral-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default function UpdateNames({ itemID, endpoint  }: { itemID: any, endpoint: string }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="">
      <button
        onClick={openModal}
        className="flex items-center bg-black text-white py-2 px-4 mr-1 rounded-lg ml-auto hover:bg-amber-600 inline-flex items-center cursor-pointer"
      >
        <FaEdit className="" size={25} />
      </button>
      <Modal show={showModal} itemID={itemID} endpoint={endpoint}  handleClose={closeModal} />
    </div>
  );
};


