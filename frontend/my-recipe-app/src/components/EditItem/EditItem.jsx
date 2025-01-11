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
import { useState, useEffect } from 'react';

import { createRecipe, updateRecipe } from '../../api/recipes'

export default function EditItem({ isOpen, onClose, currentRecipe }) {

  const [formData, setFormData] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (currentRecipe) {
      setFormData({
        title: currentRecipe.title || '',
        description: currentRecipe.description || '',
        ingredients: Array.isArray(currentRecipe.ingredients)
          ? currentRecipe.ingredients.join(', ')
          : '',
        imageLink: currentRecipe.imageLink || ''
      });
      setIsEditMode(true);
    }

  }, [currentRecipe]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const convertToList = (commaSeparatedString) => {
    if (!commaSeparatedString) return [];

    return commaSeparatedString
      .split(',')
      .map(item => item.trim())
      .filter(item => item.length > 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.ingredients = convertToList(formData.ingredients);
    if (isEditMode) {
      updateRecipe(currentRecipe.id, formData);
    } else {
      createRecipe(formData);
    }

    setFormData({
      title:  '',
      description: '',
      ingredients: [],
      imageLink:  ''
    });

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isEditMode ? 'Edit Recipe' : 'Add New Recipe'}</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  name="title"
                  value={formData.title ? formData.title : ''}
                  onChange={handleChange}
                  placeholder="Recipe title"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Description</FormLabel>
                <Textarea
                  name="description"
                  value={formData.description ? formData.description : ''}
                  onChange={handleChange}
                  placeholder="Recipe description"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Image Link</FormLabel>
                <Input
                  name="imageLink"
                  value={formData.imageLink ? formData.imageLink : ''}
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