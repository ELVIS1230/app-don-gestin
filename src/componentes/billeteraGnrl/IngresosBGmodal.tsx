import axios from 'axios';
import { useState } from 'react';


export function Modal ({ show, handleClose,credentialUser}:any){
  const [value, setValue] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [valueError, setValueError] = useState('');
  const [movementType, setMovementType] = useState('');
  const [typetrac, setTypetrac] = useState(0);
  const [cardType, setCardType] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [valueVisible, setValueVisible] = useState(false);

  const handleAcceptClick = async() => {
    let isValid = true;

    // Validaciones para el campo de valor numérico
    const regex = /^\d{1,10}(\.\d{0,2})?$/;
    if (!regex.test(value)) {
      setValueError('Por favor ingrese un valor numérico válido.');
      isValid = false;
    } else {
      setValueError('');
    }

    // Validaciones para los campos de texto
    if (['2', '1'].includes(movementType)) {
      if (name.length > 35) {
        setNameError('El nombre debe tener menos de 35 caracteres.');
        isValid = false;
      } else {
        setNameError('');
      }

      if (description.length > 35) {
        setDescriptionError('La descripción debe tener menos de 35 caracteres.');
        isValid = false;
      } else {
        setDescriptionError('');
      }
    }

    // Validación de campos requeridos
    if (
      isValid &&
      value &&
      movementType &&
      (['2', '1'].includes(movementType) && name && description)
    ) {
      const cantidad = parseFloat(value);
      const ttrac = parseFloat(movementType);
      setCantidad(cantidad);
      setTypetrac(ttrac);
      console.log(cantidad);
      console.log(ttrac);
      const data = {
        trasac_nombre:name,
        trasac_descripcion:description,
        trasac_cantidad:cantidad,
        ttrac_id_fk:{ttrac_id:ttrac},
        cuenta_id_fk:{cuenta_id:credentialUser.credentialUser.cuenta}
        
      };

      try {
        const response = await axios.post('http://localhost:3000/api/transactions',data);

      } catch (error) {
        console.error(error);
      }


      console.log(data);
      handleClose();
      handleResetFields();
    }
  };

  const handleResetFields = () => {
    setValue('');
    setValueError('');
    setMovementType('');
    setCardType('');
    setName('');
    setNameError('');
    setDescription('');
    setDescriptionError('');
    setValueVisible(false);
  };

  const getIcon = () => {
    if (movementType === '1') {
      return (
        <div className="mr-2 text-white items-center bg-green-500 p-4 rounded-lg ">&#43;</div>
      );
    } else if (movementType === '2') {
      return (
        <div className="mr-2 text-white items-center bg-red-500 p-4 rounded-lg ">&#45;</div>
      );
    }
    return null;
  };

  const handleMovementTypeChange = (selectedMovementType:any) => {
    setMovementType(selectedMovementType);
    setCardType('');
    setName('');
    setDescription('');
    setValueVisible(true); // Hacer visible el campo de valor
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${
        show ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Ingresar Movimiento</h2>

        {valueVisible && (
          <div className="flex mb-4">
            {getIcon()}
            <input
              type="number"
              placeholder="Valor"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-2 w-full"
              required
            />
          </div>
        )}
        {valueError && <div className="text-red-500 text-sm">{valueError}</div>}

        <select
          value={movementType}
          onChange={(e) => handleMovementTypeChange(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          required
        >
          <option value="">Seleccionar tipo de movimiento</option>
          <option value={2}>Gasto</option>
          <option value={1}>Ingreso</option>
        </select>

        {['2', '1'].includes(movementType) && (
          <>
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
              required
            />
            {nameError && <div className="text-red-500 text-sm">{nameError}</div>}
            <input
              type="text"
              placeholder="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
              required
            />
            {descriptionError && <div className="text-red-500 text-sm">{descriptionError}</div>}
          </>
        )}

        <div className="flex justify-center">
          <button
            onClick={() => {
              handleClose();
              handleResetFields();
            }}
            className="bg-neutral-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Cancelar
          </button>
          <button
            onClick={handleAcceptClick}
            className="bg-neutral-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ModalBGIngreso(credentialUser:any){
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={openModal}
        className="bg-neutral-700 hover:bg-neutral-900 text-white font-bold py-2 px-4 rounded"
      >
        Ingresar Dinero
      </button>
      <Modal show={showModal} credentialUser={credentialUser} handleClose={closeModal} />
    </div>
  );
};


