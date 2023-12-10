import { useState } from 'react';

const Modal = ({ show, handleClose, handleAccept }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [movementType, setMovementType] = useState(''); // Gasto, Ingreso, Ahorro
  const [selectedCard, setSelectedCard] = useState(''); // Tarjeta seleccionada
  const [showCardSelect, setShowCardSelect] = useState(false); // Controlar visibilidad del segundo select

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'value':
        setValue(value);
        break;
      default:
        break;
    }
  };
  const handleResetFields = () => {
    setName('');
    setDescription('');
    setValue('');
    setMovementType('');
    setSelectedCard('');
    setShowCardSelect(false);
  };

  const handleMovementTypeChange = (e) => {
    const selectedType = e.target.value;
    setMovementType(selectedType);
    if (selectedType === 'Ahorro') {
      // Si se selecciona 'Ahorro', mostrar el segundo select
      setShowCardSelect(true);
    } else {
      // Si no es 'Ahorro', ocultar el segundo select
      setShowCardSelect(false);
      setSelectedCard('');
    }
  };

  const handleSelectedCardChange = (e) => {
    const selectedCard = e.target.value;
    setSelectedCard(selectedCard);
  };
  
  
  const handleAcceptClick = () => {
    // Aquí se puede realizar la acción con los datos ingresados
    const data = {
      name,
      description,
      value,
      movementType,
      selectedCard, // Aquí puedes utilizar la tarjeta seleccionada si está disponible
    };
    handleAccept(data);
    handleResetFields();
    console.log(data);
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${show ? 'block' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-lg w-2/6 shadow-md">
        <h2 className="text-lg font-bold mb-4">Ingresar Movimiento</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => handleInputChange(e, 'name')}
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={(e) => handleInputChange(e, 'description')}
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => handleInputChange(e, 'value')}
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
        />
        <select
          value={movementType}
          onChange={handleMovementTypeChange}
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
        >
          <option value="">Seleccionar tipo de movimiento</option>
          <option value="Ahorro">Ahorro</option>
          <option value="Gasto">Gasto</option>
          <option value="Ingreso">Ingreso</option>
        </select>
        {showCardSelect && (
          <select
            value={selectedCard}
            onChange={handleSelectedCardChange}
            className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full"
          >
            <option value="">Seleccionar tarjeta</option>
            {/* Aquí puedes mapear las opciones de nombres de tarjetas */}
            <option value="Tarjeta 1">Tarjeta 1</option>
            <option value="Tarjeta 2">Tarjeta 2</option>
            {/* ... Otras opciones de nombres de tarjetas */}
          </select>
        )}
        <div className="flex justify-center">
          <button onClick={handleClose} className="bg-neutral-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
            Cancelar
          </button>
          <button onClick={handleAcceptClick} className="bg-neutral-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
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
