import { createContext } from "react";

const WisataIdContext = createContext({
    "id" : 0,
    "loadComplete": false
});

export default WisataIdContext;