import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

import RecipeCard from './components/RecipeCard/RecipeCard';
import Header from './components/Header/Header';
import DetailCard from './components/DetailsCard/DetailCard';
import { fetchRecipes, fetchRecipeById } from './api/recipes';


function App() {

  const [allRecipes, setAllRecipes] = useState([{
    title: 'Sushi Biiriyani',
    subtitle: 'This is the favourite sish',
    description: 'The current syntax is invalid - youre trying to immediately destructure parameters without properly declaring the component function',
    ingredients: ['rice', 'sushi', 'biryani'],
    imageLink: 'https://images.unsplash.com/photo-1612830384728-4b8c9c9b1b5d',
  }]);
  const [selectedRecipe, setSelectedRecipe] = useState(allRecipes[0] ? allRecipes[0] : {});


  useEffect(() => {
    const getRecipes = async () => {
      const allRecipes = await fetchRecipes();
      console.log(allRecipes);
      setAllRecipes(allRecipes);
      setSelectedRecipe(allRecipes[0]);
    }

    getRecipes();
  }, []);

  const onCardClick = (id) => {
    console.log("sdeass");
    fetchRecipeById(id).then((recipe) => {
      setSelectedRecipe(recipe);
    });

  };

  return (
    <ChakraProvider>
      <div className="App">
        <div className='header'>
          <Header header={'My Recipe App'}></Header>
        </div>
        <div className='body'>
          <div className='cardsSection'>
            {allRecipes.map((recipe) => (  <RecipeCard currentRecipe={recipe}  onCardClick={onCardClick}/>))}
          
          </div>
          <div className='description'>
            <DetailCard currentRecipe={selectedRecipe} />
          </div>
        </div>

      </div>
    </ChakraProvider>
  );
}

export default App;
