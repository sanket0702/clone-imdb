import axios from 'axios';
{/*
async fetchTitleData =()=>{
    const options = {
        method: 'GET',
        url: 'https://imdb-com.p.rapidapi.com/title/get-taglines',
        params: {
          tconst: 'tt0120338'
        },
        headers: {
          'x-rapidapi-key': 'b9de2e629dmsh4faff5639dba6e4p169c67jsn425052b49eb6',
          'x-rapidapi-host': 'imdb-com.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}
*/}

export async function popularMovies(){
    try{
        const options = {
            method: 'GET',
            url: 'https://imdb236.p.rapidapi.com/imdb/most-popular-movies',
            headers: {
              'x-rapidapi-key': 'b9de2e629dmsh4faff5639dba6e4p169c67jsn425052b49eb6',
              'x-rapidapi-host': 'imdb236.p.rapidapi.com'
            }
          };
          
          
              const response = await axios.request(options);
              console.log(response.data);
              return response.data
          } catch (error) {
              console.error(error);
          }

    
}



// Base URL and API Key
const API_URL = 'https://www.omdbapi.com/';
const API_KEY = '2a2d43d7'; // Replace with your API key if needed

// Fetch latest movies
export async function fetchLatestMovies() {
    try {
        const response = await axios.get(API_URL, {
            params: {
                s: 'latest', // Example query for latest movies
                type: 'movie',
                apikey: API_KEY
            }
        });
        return response.data.Search
         || []; // Return the search results
    } catch (error) {
        console.error('Error fetching latest movies:', error.message);
        throw error;
    }
}

// Fetch upcoming movies (simulated using a keyword like "upcoming")
export async function fetchUpcomingMovies() {
    try {
        const response = await axios.get(API_URL, {
            params: {
                s: 'upcoming', // Example query for upcoming movies
                type: 'movie',
                apikey: API_KEY
            }
        });
        return response.data.Search || [];
    } catch (error) {
        console.error('Error fetching upcoming movies:', error.message);
        throw error;
    }
}

// Fetch top-rated movies
export async function fetchTopRatedMovies() {
    try {
        const response = await axios.get(API_URL, {
            params: {
                s: 'top', // Example query for top-rated movies
                type: 'movie',
                apikey: API_KEY
            }
        });
        return response.data.Search || [];
    } catch (error) {
        console.error('Error fetching top-rated movies:', error.message);
        throw error;
    }
}
