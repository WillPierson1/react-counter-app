// Imports here

import ActionButtons from "./components/ActionButtons"
import CardItem from "./components/CardItem"
import Header from "./components/Header"

function App() {

  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Total Count, Add New Counter, Clear All Counters  */}

      <ActionButtons />

      {/* Main Content Section */}

      <main>
        <CardItem />
        <CardItem />
      </main>

    </>
  )
}

export default App
