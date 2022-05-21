const CAT_API_URL = 'https://api.thecatapi.com/v1/';
const API_CATS_KEY = '4aa004c3-1187-491e-b865-2034cc828648';

export const callApiCats = async () => {
  try {
    const response = await fetch(
      `${CAT_API_URL}images/search?breed_id=beng&limit=20&Aapi_key=${API_CATS_KEY}`
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const getAllFavorites = async () => {
  try {
    const params = {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_CATS_KEY
      }
    };
    const response = await fetch(`${CAT_API_URL}votes`, params);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('ERROR: ', error);
  }
};

export const favoriteCat = async (id: string) => {
  try {
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_CATS_KEY
      },
      body: JSON.stringify({
        image_id: id,
        sub_id: 'User-1234567890',
        value: 1
      })
    };
    await fetch(`${CAT_API_URL}votes`, params);

    getAllFavorites();
  } catch (error) {
    console.error(error);
  }
};

export const getFavoriteImage = async (id: string) => {
  try {
    const params = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_CATS_KEY
      }
    };
    const response = await fetch(`${CAT_API_URL}votes/${id}`, params);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return null;
  }
};
