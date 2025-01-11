import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, HStack, Tag } from '@chakra-ui/react'
import { deleteRecipe } from '../../api/recipes';
import EditItem from '../EditItem/EditItem';
import { useDisclosure } from '@chakra-ui/react';


export default function DetailCard({currentRecipe}) {

     const { isOpen, onOpen, onClose } = useDisclosure();

    const handleDelete = () => {
        deleteRecipe(currentRecipe.id);
    };

    return (
        <div><Card >
            <CardBody>
                <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{currentRecipe.title}</Heading>
                    <Text>
                       {currentRecipe.description}
                    </Text>
                </Stack>
                <HStack mt={3}>
                    {currentRecipe.ingredients.map((ingredient) => (<Tag>{ingredient}</Tag>))}
                    
                </HStack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='green' onClick={onOpen}>
                        Edit
                    </Button>
                    <Button variant='solid' colorScheme='red' onClick={handleDelete}>
                        Delete
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
         <EditItem isOpen={isOpen} onClose={onClose} currentRecipe={currentRecipe}/>
        </div>
    )
}
