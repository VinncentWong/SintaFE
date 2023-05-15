import { createContext } from "react";

const AgenTravelContext = createContext({
    currentPosition: 0,
    setCurrentPosition: (p: number) => {}
});

export default AgenTravelContext;