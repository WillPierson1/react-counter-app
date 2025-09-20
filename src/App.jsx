// Imports here

import { useState } from "react"
import ActionButtons from "./components/ActionButtons"
import Header from "./components/Header"
import RenderCardItems from "./components/RenderCardItems";

function App() {

  const data = JSON.parse(localStorage.getItem('count'));

  const [counters, setCounters] = useState(data || []); // Empty for now

  function addCounter(newCounter){ // Returned in CreateCounterForm
    setCounters([...counters, newCounter]);
    localStorage.setItem('count', JSON.stringify(counters));
    console.log(counters);
  }


  return (
    <>
      {/* Header Section */}
      <Header />


      {/* TEST */}

      {/* Total Count, Add New Counter, Clear All Counters  */}

      <ActionButtons addCounter={addCounter} /> {/* Making the Action Buttons container elemenent aware of the function as props */}

      {/* Main Content Section */}

      <main>
        {/* I should be appending card items from an array to this main
            These 2 are here for show, remove soon!
        */}
        
        <RenderCardItems counters={counters} />

      </main>

    </>
  )
}

export default App
