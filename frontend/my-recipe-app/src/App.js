import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

import RecipeCard from './components/RecipeCard/RecipeCard';
import Header from './components/Header/Header';
import DetailCard from './components/DetailsCard/DetailCard';
import { fetchRecipes, fetchRecipeById } from './api/recipes';


function App() {

  const [allRecipes, setAllRecipes] = useState([{
    title: '',
    subtitle: '',
    description: '',
    ingredients: [],
    imageLink: '',
  }]);

  const [selectedRecipe, setSelectedRecipe] = useState(allRecipes[0] ? allRecipes[0] : {});

  useEffect(() => {
    const getRecipes = async () => {
      const allRecipes = await fetchRecipes();
      setAllRecipes(allRecipes);
      setSelectedRecipe(allRecipes[0]);
    }

    getRecipes();
  }, []);

  const onCardClick = (id) => {
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
            {allRecipes.map((recipe, index) => (  <RecipeCard key={index} currentRecipe={recipe}  onCardClick={onCardClick}/>))}
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
