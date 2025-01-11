const API_URL = 'http://localhost:3004/recipes'; 

// Fetch all recipes
export async function fetchRecipes() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }
  return response.json();
}

// Fetch a single recipe by ID
export async function fetchRecipeById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch recipe with ID: ${id}`);
  }
  return response.json();
}

// Create a new recipe
export async function createRecipe(data) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to create recipe');
  }
  return response.json();
}

// Update an existing recipe by ID
export async function updateRecipe(id, data) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Failed to update recipe with ID: ${id}`);
  }
  return response.json();
}

// Delete a recipe by ID
export async function deleteRecipe(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Failed to delete recipe with ID: ${id}`);
  }
  return response.json();
}
