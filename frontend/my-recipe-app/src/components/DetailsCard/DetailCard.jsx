import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, HStack, Tag, calc, Center } from '@chakra-ui/react'
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
            <CardBody alignItems={'center'}>
                <Image
                    src={currentRecipe.imageLink}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    maxHeight={380}
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{currentRecipe.title}</Heading>
                    <Text>
                       {currentRecipe.description}
                    </Text>
                </Stack>
                <HStack mt={3}>
                    {currentRecipe.ingredients.map((ingredient, index) => (<Tag key={index}>{ingredient}</Tag>))}
                    
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
