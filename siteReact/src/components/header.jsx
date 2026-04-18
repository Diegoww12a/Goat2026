import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTrophy,
  faBagShopping,
  faCompass,
  faCalendar,
  faNewspaper,
  faGraduationCap,
  faUser,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { id: 1, icon: faHouse, label: "Inicio", dropdown: false, pagina: "inicio" },
  { id: 2, icon: faTrophy, label: "Ranking", dropdown: true, tipo: "ranking", pagina: "inicio" },
  { id: 3, icon: faBagShopping, label: "Loja", dropdown: false, pagina: "loja" },
  { id: 4, icon: faCompass, label: "Descobrir", dropdown: false, pagina: "descobrir" },
  { id: 5, icon: faCalendar, label: "Calendario", dropdown: false, pagina: "calendario" },
  { id: 6, icon: faNewspaper, label: "Atualizações", dropdown: false, pagina: "atualizacoes" },
  { id: 7, icon: faGraduationCap, label: "Como jogar", dropdown: false, pagina: "como-jogar" },
];

export default function Header({ setPagina }) {
  const [ativo, setAtivo] = useState(1);
  const [hover, setHover] = useState(null);
  // const timeoutRef = useRef(null);

  return (
    <>
    <header className="bg-[#06121f] fixed w-full z-20 flex justify-between  border-b text-white border-[#0a1a2e]">
      <div className="px-6 gap-5 flex items-center py-4 lg:py-0">
        <div>
          <img className="w-48" src="goat-logo.svg" alt="" />
        </div>
        <div className="border p-2 rounded-lg bg-[#081626] border-[#03376a] gap-2 flex items-center">
          <div className="flex items-center gap-1.5">
            <span className="flex rounded-full h-2 w-2 animate-pulse bg-[#34d399]"></span>
            <img className="w-4 h-4" src="user.svg" alt="" />
            <p className="text-[#32cc95] pr-2 font-bold text-sm">542</p>
          </div>
        </div>
        <nav className="w-full hidden  lg:flex max-w-2xl">
          <ul className="uppercase     flex items-center w-full ">
            {navItems.map(p => (
              <div
              onClick={() => {
                setAtivo(p.id)
                setPagina(p.pagina)
              }}
              onMouseEnter={() => setHover(p.id)}
              onMouseLeave={() => setHover(null)}
               key={p.id} className={`gap-1  relative hover:bg-[#051d34]  cursor-pointer  w-[90px] pt-4 pb-2 flex flex-col items-center justify-center              ${ativo === p.id ? "bg-[#051d34] text-[#0082ea]" : "border-r text-[#ceced3] border-[#0a1a2e] "}`}>
                <span>
                  <FontAwesomeIcon icon={p.icon} className="text-[#d2d2d6]" / >
                </span>
                <p className="text-[9px] font-bold tracking-tight  ">{p.label}</p>
                
                {hover === p.id && p.dropdown && (
                  <div  className=" absolute z-10 bg-[#040d16] opacity-95    top-full w-[36rem]  left-10  max-w-2xl ">
                    <div className="border p-6 rounded-lg bg-[#040d16] border-[#0a1a2e] mt-1.5">
                       {p.tipo === "ranking" && (
                        <div className="grid w-full grid-cols-2  gap-6">
                          <div className="flex gap-1.5    flex-col">
                            <h3 className="text-sm font-bold">comum</h3>
                            <button onClick={(e) => {e.stopPropagation(); setPagina("solo")} } className="flex group mt-3  text-[#d2d2d6]  hover:bg-[#06101c] items-center  px-3 gap-3 py-2.5 rounded-lg    ">
                              <span className="border duration-200 transition-all w-8 h-8  flex items-center justify-center group-hover:bg-[#071422] bg-[#071422] border-[#0a1a2e] rounded-lg group-hover:border-[#043f71]">
                                <FontAwesomeIcon icon={faUser} className="group-hover:text-[#0083ed]" / >
                              </span>
                              <p className="group-hover:text-[#0083ed] text-sm font-medium">Solo/Duo</p>
                            </button>

                            <button onClick={(e) => {e.stopPropagation(); setPagina("squad")} } className="flex group  text-[#d2d2d6]  hover:bg-[#06101c] items-center  px-3 gap-3 py-2.5 rounded-lg    ">
                              <span className="border duration-200 transition-all w-8 h-8  flex items-center justify-center group-hover:bg-[#071422] bg-[#071422] border-[#0a1a2e] rounded-lg group-hover:border-[#043f71]">
                                <FontAwesomeIcon icon={faStar} className="group-hover:text-[#0083ed]" / >
                              </span>
                              <p className="group-hover:text-[#0083ed] text-sm font-medium">Squad</p>
                            </button>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <h3 className="text-sm font-bold tracking-tight text-[#e1920c]">premium</h3>

                            <button className="flex group mt-3 text-[#d2d2d6]  hover:bg-[#06101c] items-center  px-3 gap-3 py-2.5 rounded-lg    ">
                              <span className="border duration-200 transition-all w-8 h-8  flex items-center justify-center group-hover:bg-[#071422] bg-[#071422] border-[#0a1a2e] rounded-lg group-hover:border-[#043f71]">
                                <FontAwesomeIcon icon={faStar} className="group-hover:text-[#0083ed]" / >
                              </span>
                              <p className="group-hover:text-[#0083ed] text-sm font-medium">MVP</p>
                            </button>

                            <button className="flex group  text-[#d2d2d6]  hover:bg-[#06101c] items-center  px-3 gap-3 py-2.5 rounded-lg    ">
                              <span className="border duration-200 transition-all w-8 h-8  flex items-center justify-center group-hover:bg-[#071422] bg-[#071422] border-[#0a1a2e] rounded-lg group-hover:border-[#043f71]">
                                <FontAwesomeIcon icon={faStar} className="group-hover:text-[#0083ed]" / >
                              </span>
                              <p className="group-hover:text-[#0083ed] text-sm font-medium">1ᵃ Etapa</p>
                            </button>

                            <button className="flex group  text-[#d2d2d6]  hover:bg-[#06101c] items-center  px-3 gap-3 py-2.5 rounded-lg    ">
                              <span className="border duration-200 transition-all w-8 h-8  flex items-center justify-center group-hover:bg-[#071422] bg-[#071422] border-[#0a1a2e] rounded-lg group-hover:border-[#043f71]">
                                <FontAwesomeIcon icon={faStar} className="group-hover:text-[#0083ed]" / >
                              </span>
                              <p className="group-hover:text-[#0083ed] text-sm font-medium">2ᵃ Etapa</p>
                            </button>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <h3 className="text-sm font-bold tracking-tight">Eventos</h3>
                            <button className="flex group  text-[#d2d2d6]  hover:bg-[#06101c] items-center  px-3 gap-3 py-2.5 rounded-lg    ">
                              <span className="border duration-200 transition-all w-8 h-8  flex items-center justify-center group-hover:bg-[#071422] bg-[#071422] border-[#0a1a2e] rounded-lg group-hover:border-[#043f71]">
                                <FontAwesomeIcon icon={faStar} className="group-hover:text-[#0083ed]" / >
                              </span>
                              <p className="group-hover:text-[#0083ed] text-sm font-medium">Evento</p>
                            </button>

                            <button className="flex group  text-[#d2d2d6]  hover:bg-[#06101c] items-center  px-3 gap-3 py-2.5 rounded-lg    ">
                              <span className="border duration-200 transition-all w-8 h-8  flex items-center justify-center group-hover:bg-[#071422] bg-[#071422] border-[#0a1a2e] rounded-lg group-hover:border-[#043f71]">
                                <FontAwesomeIcon icon={faStar} className="group-hover:text-[#0083ed]" / >
                              </span>
                              <p className="group-hover:text-[#0083ed] text-sm font-medium">Evento Girls</p>
                            </button>
                          </div>
                          
                          <div className="flex flex-col gap-1.5">
                            <h3 className="text-sm font-bold tracking-tight">estatisticas</h3>
                            <button className="flex group  text-[#d2d2d6]  hover:bg-[#06101c] items-center  px-3 gap-3 py-2.5 rounded-lg    ">
                              <span className="border duration-200 transition-all w-8 h-8  flex items-center justify-center group-hover:bg-[#071422] bg-[#071422] border-[#0a1a2e] rounded-lg group-hover:border-[#043f71]">
                                <FontAwesomeIcon icon={faStar} className="group-hover:text-[#0083ed]" / >
                              </span>
                              <p className="group-hover:text-[#0083ed] text-sm font-medium">1ᵃ Etapa</p>
                            </button>

                            <button className="flex group  text-[#d2d2d6]  hover:bg-[#06101c] items-center  px-3 gap-3 py-2.5 rounded-lg    ">
                              <span className="border duration-200 transition-all w-8 h-8  flex items-center justify-center group-hover:bg-[#071422] bg-[#071422] border-[#0a1a2e] rounded-lg group-hover:border-[#043f71]">
                                <FontAwesomeIcon icon={faStar} className="group-hover:text-[#0083ed]" / >
                              </span>
                              <p className="group-hover:text-[#0083ed] text-sm font-medium">2ᵃ Etapa</p>
                            </button>
                          </div>
                        </div>
                       )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </ul>
        </nav>
      </div>
      <div className=" items-center px-5 hidden lg:flex    ">
          <button className=" px-6 hover:bg-[#0070d6] duration-300 transition-all hover:scale-[1.03] py-2.5 bg-[#0083ed] rounded-lg font-bold text-white flex items-center gap-2  ">
            <span>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg>
            </span>
            <p className="font-bold tracking-tight">Entrar com Discord</p>
          </button>
        </div>
    </header>
    </>
  );
}