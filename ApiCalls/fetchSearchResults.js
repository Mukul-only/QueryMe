const fetchSearchResults = async (query) => {
  try {
    const url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${query}&pageNumber=1&pageSize=30&autoCorrect=true&safeSearch=true`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ff8e1b5ee8msha5b4d142bb40a4ep137546jsn2533430a24a6",
        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    return new Error(error.message);
  }
};
export default fetchSearchResults;
