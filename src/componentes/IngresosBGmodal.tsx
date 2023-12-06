import { useState } from 'react';

const Modal = ({ show, handleClose, handleAccept }) => {
  const [amount, setAmount] = useState('');

  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${show ? 'block' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Ingresar Dinero</h2>
        <input
          type="number"
          placeholder="Ingrese la cantidad"
          value={amount}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
        />
        <div className="flex justify-end">
          <button onClick={handleClose} className="bg-red-400 hover:bg-red-600 text-gray-800 font-bold py-2 px-4 rounded mr-2">
            Cancelar
          </button>
          <button onClick={() => handleAccept(amount)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Aceptar
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

  const handleAccept = (amount) => {
    // Aquí puedes realizar la acción con el número ingresado
    console.log(`Cantidad ingresada: ${amount}`);
    closeModal();
  };

  return (
    <div className="py-8 px-4 text-center">
      <button onClick={openModal} className="bg-neutral-500 hover:bg-stone-900 hover:text-white font-bold w-full py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-4 lg:mt-0">
        Ingresar Dinero
      </button>
      <Modal show={showModal} handleClose={closeModal} handleAccept={handleAccept} />
    </div>
  );
};

export default ModalBGIngreso;
