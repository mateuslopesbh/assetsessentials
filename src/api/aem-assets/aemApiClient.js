// aemApiClient.js

const BASE_URL = 'http://aem.local/api/assets'; // Replace with your AEM Assets base URL

const aemApiClient = {
  getImages: async (url) => {
    const credentials = window.btoa('admin:admin'); // Replace 'username' and 'password' with your actual credentials

    const response = await fetch(`${BASE_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();
    const imageEntities = data.entities.filter((entity) => {
      const format = entity.properties.metadata['dc:format'];
      return format && format.startsWith('image/');
    });
    return imageEntities;
  },
};

export default aemApiClient;
