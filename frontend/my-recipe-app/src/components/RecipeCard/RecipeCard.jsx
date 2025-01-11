import React from 'react';
import { deleteRecipe } from '../../api/recipes';
import EditItem from '../EditItem/EditItem';
import { useDisclosure } from '@chakra-ui/react';

export default function RecipeCard({currentRecipe, onCardClick}) {

   const { isOpen, onOpen, onClose } = useDisclosure();

  const onDelete = () => {
    deleteRecipe(currentRecipe.id);
  }
  return (
    <div style={styles.card} onClick={() => onCardClick(currentRecipe.id)}>
      <h2 style={styles.title}>{currentRecipe.title}</h2>
      <p style={styles.subtitle}>{currentRecipe.description}</p>
      <div style={styles.buttonContainer}>
        <button style={styles.deleteButton} onClick={onDelete}>
          Delete
        </button>
      </div>
      <EditItem isOpen={isOpen} onClose={onClose} currentRecipe={currentRecipe}/>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    width: '250px',
    height: '150px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '16px',
  },
  title: {
    margin: '0 0 8px 0',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  subtitle: {
    margin: '0 0 16px 0',
    fontSize: '14px',
    color: '#555',
  },
  buttonContainer: {
    display: 'flex',
    gap: '8px',
  },
  editButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

