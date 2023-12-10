import React from 'react';
import { useState } from 'react';

const Modal = ({ show, handleClose }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCard, setSelectedCard] = useState('');

  const handleResetFields = () => {
    setTitle('');
    setDate('');
    setTime('');
    setDescription('');
    setSelectedCard('');
  };

  const handleCreateClick = () => {
    const data = {
      title,
      date,
      time,
      description,
      selectedCard,
    };
    console.log(data); // Aquí puedes realizar las acciones con los datos (guardar en la base de datos, etc.)
    handleClose();
    handleResetFields();
  };

  const handleCancelClick = () => {
    handleClose();
    handleResetFields(); 
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
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
        />
      </div>

      <div className="flex lg:flex-row flex-col lg:items-center">
        <div className="flex-grow lg:mr-2 mb-4 lg:mb-0">
          <label htmlFor="date" className="block text-neutral-900 text-sm font-bold mb-2">Fecha</label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="Seleccione fecha"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          />
        </div>

        <div className="flex-grow">
          <label htmlFor="time" className="block text-neutral-900 text-sm font-bold mb-2">Hora</label>
          <input
            type="time"
            id="time"
            name="time"
            placeholder="Seleccione hora"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          />
        </div>
      </div>

      <div className="">
        <label htmlFor="description" className="block text-neutral-900 text-sm font-bold mb-2">Descripción</label>
        <textarea
          id="description"
          name="description"
          placeholder="Ingrese descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded-md text-neutral-900 px-3 py-2 mb-4 w-full"
        ></textarea>
      </div>

      <div className="">
        <label htmlFor="cards" className="block text-neutral-900 text-sm font-bold mb-2">Seleccione una tarjeta</label>
        <select
          id="cards"
          name="cards"
          value={selectedCard}
          onChange={(e) => setSelectedCard(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
        >
          <option value="">Tarjetas</option>
          <option value="card1">Tarjeta 1</option>
          <option value="card2">Tarjeta 2</option>
          <option value="card3">Tarjeta 3</option>
        </select>
      </div>

      <div className='flex justify-center'>
        <button onClick={handleCancelClick} type="button" className="bg-neutral-500 hover:bg-stone-900 hover:text-white font-bold w-full py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mr-4 mt-4 lg:mt-0">
          Cancelar</button>
        <button onClick={handleCreateClick} type="button" className="bg-neutral-500 hover:bg-stone-900 hover:text-white font-bold w-full py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-4 lg:mt-0">
          Crear recordatorio</button>
      </div>
    
  </div>
</div>

  );
};

const ModalRecordatorio = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)} className="bg-neutral-500 hover:bg-stone-900 hover:text-white font-bold w-full py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-4 lg:mt-0">
        Nuevo recordatorio
      </button>
      <Modal show={showModal} handleClose={handleClose} />
    </div>
  );
};

export default ModalRecordatorio;
