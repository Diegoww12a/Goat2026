import Header from "./components/header";
import { useState } from "react";
import Hero from "./components/hero";

export default function App() {
  const [pagina, setPagina] = useState("inicio");
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <div className="font-sora min-h-screen select-none relative lg:px-0 text-black h-screen bg-[#040d16] flex flex-col">
      <Header setPagina={setPagina} />
      <Hero
        pagina={pagina}
        setPagina={setPagina}
        selectedPlayer={selectedPlayer}
        setSelectedPlayer={setSelectedPlayer}
      />
    </div>
  );
}