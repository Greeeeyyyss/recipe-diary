const baseUrl = 'http://www.recipepuppy.com/api/';

/*
Optional Parameters:
i : comma delimited ingredients
q : normal search query
p : page
*/

export const searchRecipe = async (search, page) => {
  const query = encodeURI(search);
  const request = `${baseUrl}?q=${query}&p=${page}`;
  const results = await fetch(request);
  const data = await results.json();
  return data.results;
};