import { FETCHING_POKEMON_START, FETCHING_POKEMON_SUCCESS} from "../actions";

export const initialState = {

    isFetching:false,
    error:"",

    pokemon:[

    ]
};

export const pokeReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCHING_POKEMON_START:
        return{
            ...state,
            isFetching:true,
            error:""
        }

        case FETCHING_POKEMON_SUCCESS:
            return{
                ...state,
                isFetching:false,
                error:"",
                pokemon:[...state.pokemon,action.payload]
            }

    default:
      return state;
  }
};
