import axios from 'axios';
import { SetStateAction, useState } from 'react';
import { IoIosRemove, IoIosAdd } from "react-icons/io";

const Modal = ({ show, handleClose, handleAccept }: any) => {
  const [movementType, setMovementType] = useState('');
  const [value, setValue] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [valueVisible, setValueVisible] = useState(false);

  const handleMovementTypeChange = (selectedType: SetStateAction<string>) => {
    setMovementType(selectedType);
    setValue('');
    setValueVisible(selectedType !== '')
    console.log(movementType); // Hacer visible el campo de valor si el tipo de movimiento está seleccionado
  };

  const handleValueChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    // Validar que la entrada sea un número con un máximo de 10 dígitos y 2 decimales
    const regex = /^\d{1,10}(\.\d{0,2})?$/;
    if (regex.test(value) || value === '') {
      setValue(value);
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const amount = parseFloat(value);
    const ttrac = parseFloat(movementType);
    const data = {
      trasac_name: name,
      trasac_description: description,
      trasac_quantity: amount,
      ttrac_id_fk: ttrac,
    };
console.log(amount)
    try {
      const response = await axios.post('http://localhost:3000/api/transactions/cards',data);
      console.log(response.data);
      handleAccept({ movementType, amount, name, description });
    } catch (error) {
      console.error(error);
    }


    handleClose();
    handleResetFields();
  };

  const getIcon = () => {
    if (movementType === '1') {
      return <IoIosAdd size={35} className="mr-2 text-white bg-green-500 rounded-lg" />;
    } else if (movementType === '2') {
      return <IoIosRemove size={35} className="mr-2 text-white bg-red-500 rounded-lg" />;
    }
    return null;
  };

  const handleResetFields = () => {
    setMovementType('');
    setValue('');
    setName('');
    setDescription('');
    setValueVisible(false);
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${show ? 'block' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form className="p-4 md:p-5" onSubmit={handleSubmit}>
          <div className="flex items-center justify-between border-b rounded-t mb-2">
            <h3 className="text-lg font-semibold text-gray-900 ">
              Realizar Nueva Transacción
            </h3>
            <button onClick={handleClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-toggle="crud-modal">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
            </button>
          </div>

          <div className="col-span-1 sm:col-span-2 mt-3">
            <label className="block my-2 text-sm font-medium text-gray-900">Tipo de Transacción</label>

            <select
              value={movementType}
              onChange={(e) => handleMovementTypeChange(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mb-4"
              required
            >
              <option value="">Seleccionar tipo de movimiento</option>
              <option value="1">Ingreso</option>
              <option value="2">Gasto</option>
              
            </select>
          </div>
          <div>
            {valueVisible && (
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">Ingrese Valor</label>
                <div className="flex items-center">
                  {getIcon()}
                  <span className='font-bold text-xl text-center pt-3 pr-2'>$</span>
                  <input
                    type="number"
                    value={value}
                    onChange={handleValueChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="100000000.00"
                  />
                </div>
              </div>
            )}
          </div>
          <button type="submit" className="mx-auto block text-white items-center bg-black hover:bg-gray-800 font-medium rounded-lg text-sm px-5 mt-4 py-2.5">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

const ModalTarjeta = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAccept = (amount: any) => {
    // Aquí puedes realizar la acción con el número ingresado
    console.log(`Cantidad ingresada: ${amount}`);
    closeModal();
  };

  return (
    <div className="">
      <button onClick={openModal} className="bg-black hover:bg-gray-800 text-white py-2 px-4 mr-1 rounded-lg ml-auto">
        Nueva Transaccion
      </button>
      <Modal show={showModal} handleClose={closeModal} handleAccept={handleAccept} />
    </div>
  );
};

export default ModalTarjeta;
