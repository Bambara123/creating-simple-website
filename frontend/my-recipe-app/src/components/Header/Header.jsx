import React from 'react'
import { IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react';
import EditItem from '../EditItem/EditItem';

export default function Header({ header }) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{header}</h1>
      <div>
        <IconButton
          colorScheme='green'
          aria-label='Call Segun'
          size='lg'
          icon={<AddIcon />}
          onClick={onOpen}

        />
         <EditItem isOpen={isOpen} onClose={onClose} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    height: '100%',
    padding: '30px',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
};
