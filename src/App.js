

import Gameboard from "./components/Gameboard";


function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}> 
        <div className="absolute inset-0 bg-[#8db1ba] opacity-20"></div>
          <Gameboard/>
     
    
     
    </div>
  );
}

export default App;
