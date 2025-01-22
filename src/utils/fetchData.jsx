//named export it is
export const exerciseOptions= {
    method: 'GET',
   
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_API_KEY ,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };
    
 export const youtubeOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_API_KEY,
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
export const fetchData= async( url, options)=> 
{
    const response= await fetch(url, options); //inbuilt fetch function
    const data= await response.json();  //converting to json
    
    return data;
}