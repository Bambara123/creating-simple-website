import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  ModalFooter,
} from '@chakra-ui/react';
import { useState } from 'react';

import { createRecipe } from '../../api/recipes'

export default function EditItem({ isOpen, onClose }) {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageLink: '',
    ingredients: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    createRecipe(formData);

    // Handle form submission logic here
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Recipe</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Recipe title"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Description</FormLabel>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Recipe description"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Image Link</FormLabel>
                <Input
                  name="imageLink"
                  value={formData.imageLink}
                  onChange={handleChange}
                  placeholder="Recipe image link"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Ingredients</FormLabel>
                <Textarea
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                  placeholder="Enter ingredients (Separated by comma)"
                />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} type="submit">
              Submit
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}