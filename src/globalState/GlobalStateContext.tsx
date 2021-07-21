import { createContext } from 'preact';
import { useReducer } from 'preact/hooks';
import { ContextProviderProps, CreateContextProps } from 'sharedTypes';
import { CapPricesData } from './dataTypes';

type InitialStateProps = {
  data: CapPricesData | null;
  ticketType: null | string; // 'adult' | 'child';
  ticketLength: null | string; // '1day' | '3day' | '1week';
};

type ActionType =
  | {
      payload: string;
      type: 'SET_TICKET_TYPE';
    }
  | {
      payload: string;
      type: 'SET_TICKET_LENGTH';
    }
  | {
      payload: CapPricesData;
      type: 'SET_DATA';
    };

const initialState: InitialStateProps = {
  data: null,
  ticketType: 'adult',
  ticketLength: null,
};

export const GlobalContext = createContext<CreateContextProps<InitialStateProps, ActionType>>([
  initialState,
  () => {},
]);

export const GlobalContextProvider = ({ children }: ContextProviderProps): JSX.Element => {
  const reducer = (state: InitialStateProps, action: ActionType) => {
    switch (action.type) {
      case 'SET_TICKET_TYPE':
        return {
          ...state,
          ticketType: action.payload,
        };
      case 'SET_TICKET_LENGTH':
        return {
          ...state,
          ticketLength: action.payload,
        };
      case 'SET_DATA':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return initialState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return <GlobalContext.Provider value={[state, dispatch]}>{children} </GlobalContext.Provider>;
};
