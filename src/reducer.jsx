const reducer = (state, action) => {
  switch (action.type) {
    case "HOME_UPDATE":
      return {
        ...state,
        name: action.payload.name,
        image: action.payload.image,
        paragraph: action.payload.paragraph,
      };

    case "ABOUT_UPDATE":
      return {
        ...state,
        name: action.payload.name,
        image: action.payload.image,
        paragraph: action.payload.paragraph,
      };

    case "VIDEO_UPDATE":
      return {
        ...state,
        name2: action.payload.name2, // Ensure these match the state used in the component
        paragraph2: action.payload.paragraph2,
      };

    case "GET_SERVICES":
      return {
        ...state,
        services: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
