import axios from 'axios';
import React, { useState } from 'react';

export function Modal ({ show, handleClose,credentialUser}:any) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  // const [selectedCard, setSelectedCard] = useState('');
  

  const [errors, setErrors] = useState({
    title: '',
    date: '',
    description: '',
    // selectedCard: '',
  });

  const handleInputChange = (fieldName, value) => {
    let error = '';

    if (!value.trim()) {
      error = 'Este campo es obligatorio';
    } else if ((fieldName === 'title') && value.length > 35) {
      error = 'El máximo de caracteres es 35';
    } 
      else if ((fieldName === 'description') && value.length > 85) {
      error = 'El máximo de caracteres es 85';
    } 
    else if (fieldName === 'date') {
      error = '';
    // } else if (fieldName === 'selectedCard') {
    //   error = '';
    } else if (fieldName === 'value' && !/^\d{1,10}(\.\d{0,2})?$/.test(value)) {
      error = 'Por favor, ingrese un valor numérico válido';
    }

    setErrors({ ...errors, [fieldName]: error });

    switch (fieldName) {
      case 'title':
        setTitle(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'description':
        setDescription(value);
        break;
      // case 'selectedCard':
      //   setSelectedCard(value);
      //   break;
      default:
        break;
    }
  };

  const handleCreateClick = async() => {
    if (title && date && description && !errors.title && !errors.date && !errors.description) {
      const data = {
        remind_name:title,
        remind_description:description,
        remind_date:date,
        u_cedula_fk: { u_cedula :credentialUser.credentialUser.cedula}
        
      };
      try {
        const response = await axios.post('http://localhost:3000/api/reminders',data);

      } catch (error) {
        console.error(error);
      }

      console.log(data); // Puedes realizar acciones con los datos (guardar en la base de datos, etc.)
      handleClose();
      handleResetFields();
    }
  };

  const handleCancelClick = () => {
    handleClose();
    handleResetFields();
  };

  const handleResetFields = () => {
    setTitle('');
    setDate('');
    setDescription('');
    // setSelectedCard('');
    setErrors({
      title: '',
      date: '',
      description: '',
      // selectedCard: '',
    });
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${show ? 'block' : 'hidden'}`}>
      <div className="mb-6 bg-white w-2/6 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4 text-center">Agregar Recordatorio</h2>

        <div className="mb-1">
          <label htmlFor="title" className="block text-neutral-900 text-sm font-bold mb-2">Nombre</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Ingrese título o nombre"
            value={title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div>
          <div className="">
            <label htmlFor="date" className="block text-neutral-900 text-sm font-bold mb-2">Fecha</label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="Seleccione fecha"
              value={date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
            />
            {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
          </div>
        </div>

        <div className="">
          <label htmlFor="description" className="block text-neutral-900 text-sm font-bold mb-2">Descripción</label>
          <textarea
            id="description"
            name="description"
            placeholder="Ingrese descripción"
            value={description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="border border-gray-300 rounded-md text-neutral-900 px-3 py-2 mb-4 w-full"
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        {/* <div className="">
          <label htmlFor="cards" className="block text-neutral-900 text-sm font-bold mb-2">Seleccione una tarjeta</label>
          <select
            id="cards"
            name="cards"
            value={selectedCard}
            onChange={(e) => handleInputChange('selectedCard', e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          >
            <option value="">Tarjetas</option>
            <option value="card1">Tarjeta 1</option>
            <option value="card2">Tarjeta 2</option>
            <option value="card3">Tarjeta 3</option>
          </select>
          {errors.selectedCard && <p className="text-red-500 text-sm">{errors.selectedCard}</p>}
        </div> */}

        <div className='flex justify-center'>
          <button onClick={handleCancelClick} type="button" className="bg-neutral-500 hover:bg-red-800 hover:text-white font-bold w-full py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mr-4 mt-4 lg:mt-0">
            Cancelar</button>
          <button onClick={handleCreateClick} type="button" className="bg-neutral-500 hover:bg-stone-900 hover:text-white font-bold w-full py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-4 lg:mt-0">
            Crear recordatorio</button>
        </div>

      </div>
    </div>
  );
};

export default function ModalRecordatorio (credentialUser:any) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)} className="bg-neutral-500 hover:bg-stone-900 hover:text-white font-bold w-full py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-4 lg:mt-0">
        Nuevo recordatorio
      </button>
      <Modal show={showModal} credentialUser={credentialUser} handleClose={handleClose} />
    </div>
  );
};


