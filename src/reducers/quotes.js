export default function quotes(state = [], action) {
 
  switch (action.type) {
    case "ADD_QUOTE":
      return {
        ...state, {...state.quotes, action.quote }
      };

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);

    case "UPVOTE_QUOTE":
      return {
        ...state,
        authors: [...state.authors, action.author]
      };

    case "DOWNVOTE_QUOTE":
      
      return {
        ...state,
        authors: [...state.authors.slice(0, idx), ...state.authors.slice(idx + 1)]
      };

    default:
      return state;
  }
}
