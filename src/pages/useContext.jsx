import { createContext } from "react";


 export const DataContext = createContext(null)

function Context( {children}) {
  // Provide some data here if needed
  const data = "some data";

  return (
<>
    <DataContext.Provider value={{data}}>
        {children}
    </DataContext.Provider>
</>
  );
}

export default Context;
