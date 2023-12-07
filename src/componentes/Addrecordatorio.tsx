import React from 'react';

const Modal = ({ show, handleClose }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${show ? 'block' : 'hidden'}`}>
      <div className="mb-6 bg-neutral-100 w-2/6 p-4 rounded-2xl shadow-xl">
        <h2 className="text-lg font-semibold mb-4">Agregar Recordatorio</h2>
        <div className="">
          <div className="mb-4">
            <label htmlFor="title" className="block text-neutral-900 text-sm font-bold mb-2"></label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Ingrese título o nombre"
              className="border border-black bg-transparent appearance-none rounded-xl w-full py-2 px-3 text-neutral-900 leading-tight focus:outline-none focus:shadow-outline shadow-md"
            />
          </div>

          <div className="flex lg:flex-row flex-col lg:items-center">
            <div className="flex-grow lg:mr-2 mb-4 lg:mb-0">
              <label htmlFor="date" className="block text-neutral-900 text-sm font-bold mb-2"></label>
              <input
                type="date"
                id="date"
                name="date"
                placeholder="Seleccione fecha"
                className="border border-black bg-transparent appearance-none rounded-xl w-full py-2 px-3 text-neutral-900 leading-tight focus:outline-none focus:shadow-outline shadow-md"
              />
            </div>

            <div className="flex-grow">
              <label htmlFor="time" className="block text-neutral-900 text-sm font-bold mb-2"></label>
              <input
                type="time"
                id="time"
                name="time"
                placeholder="Seleccione hora"
                className="border border-black bg-transparent appearance-none rounded-xl w-full py-2 px-3 text-neutral-900 leading-tight focus:outline-none focus:shadow-outline shadow-md"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-neutral-900 text-sm font-bold mb-2"></label>
            <textarea
              id="description"
              name="description"
              placeholder="Ingrese descripción"
              className="border border-black bg-transparent appearance-none rounded-xl w-full py-2 px-3 text-neutral-900 leading-tight focus:outline-none focus:shadow-outline shadow-md"
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="cards" className="block text-neutral-900 text-sm font-bold mb-2">Seleccione una tarjeta</label>
            <select
              id="cards"
              name="cards"
              className="bg-white border border-black bg-transparent appearance-none rounded-xl w-full py-2 px-3 text-neutral-900 leading-tight focus:outline-none focus:shadow-outline shadow-md"
            >
              <option value="" disabled selected hidden>Tarjetas</option>
              <option value="card1">Tarjeta 1</option>
              <option value="card2">Tarjeta 2</option>
              <option value="card3">Tarjeta 3</option>
            </select>
          </div>

          <div className='grid justify-items-center'>
            <button onClick={handleClose} type="button" className="bg-neutral-500 hover:bg-stone-900 hover:text-white font-bold w-full py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-4 lg:mt-0">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ModalRecordatorio = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)} className="bg-neutral-500 hover:bg-stone-900 hover:text-white font-bold w-full py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-4 lg:mt-0">
        Abrir Modal
      </button>
      <Modal show={showModal} handleClose={handleClose} />
    </div>
  );
};

export default ModalRecordatorio;
