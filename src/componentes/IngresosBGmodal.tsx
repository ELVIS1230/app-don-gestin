import { useState } from 'react';

const Modal = ({ show, handleClose }) => {
  const [value, setValue] = useState('');
  const [movementType, setMovementType] = useState('');
  const [cardType, setCardType] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAcceptClick = () => {
    if (value && movementType && ((movementType === 'Ahorro' && cardType) || (['Gasto', 'Ingreso'].includes(movementType) && name && description))) {
      const data = {
        value,
        movementType,
        cardType,
        name,
        description,
      };
      console.log(data);
      handleClose();
      handleResetFields();
    } else {
      alert('Por favor complete todos los campos.');
    }
  };

  const handleResetFields = () => {
    setValue('');
    setMovementType('');
    setCardType('');
    setName('');
    setDescription('');
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${show ? 'block' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Ingresar Movimiento</h2>
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          required
        />
        <select
          value={movementType}
          onChange={(e) => {
            setMovementType(e.target.value);
            setCardType('');
            setName('');
            setDescription('');
          }}
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          required
        >
          <option value="">Seleccionar tipo de movimiento</option>
          <option value="Ahorro">Ahorro</option>
          <option value="Gasto">Gasto</option>
          <option value="Ingreso">Ingreso</option>
        </select>

        {movementType === 'Ahorro' && (
          <select
            value={cardType}
            onChange={(e) => {
              setCardType(e.target.value);
              setName('');
              setDescription('');
            }}
            className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
            required
          >
            <option value="">Seleccionar tarjeta</option>
            <option value="card-1">Card-1</option>
            <option value="card-2">Card-2</option>
            <option value="card-3">Card-3</option>
          </select>
        )}

        {['Gasto', 'Ingreso'].includes(movementType) && (
          <>
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
              required
            />
            <input
              type="text"
              placeholder="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
              required
            />
          </>
        )}

        <div className="flex justify-center">
          <button onClick={() => { handleClose(); handleResetFields(); }} className="bg-neutral-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">
            Cancelar
          </button>
          <button onClick={handleAcceptClick} className="bg-neutral-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalBGIngreso = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='flex justify-center'>
      <button onClick={openModal} className="bg-neutral-700 hover:bg-neutral-900 text-white font-bold py-2 px-4 rounded">
        Ingresar Dinero
      </button>
      <Modal show={showModal} handleClose={closeModal} />
    </div>
  );
};

export default ModalBGIngreso;
