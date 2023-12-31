const fetchSearchResults = async (query) => {
  try {
    const url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${query}&pageNumber=1&pageSize=30&autoCorrect=true&safeSearch=true`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      const err = await response.json();

      throw new Error(err.message);
    }
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    return { error: true, message: error.message };
  }
};
export default fetchSearchResults;
