import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Modal.css';

function Modal() {
  const { selectedDay, setSelectedDay } = useContext(AppContext);

  const closeModal = () => {
    setSelectedDay(null);
  };

  return (
    <AnimatePresence>
      {selectedDay && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/src/assets/images/${selectedDay.image}`}
              alt={`Day ${selectedDay.day}`}
              className="modal-image"
            />
            <h2>Day {selectedDay.day}</h2>
            <p>{selectedDay.description}</p>
            <blockquote>{selectedDay.affirmation}</blockquote>
            <button onClick={closeModal} className="close-button">
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal; 