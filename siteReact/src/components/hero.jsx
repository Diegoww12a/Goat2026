import { useState, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTrophy,
  faBagShopping,
  faCompass,
  faUsers,
  faShoppingCart,
  faChevronDown,
  faChevronUp,
  faCalendar,
  faCloudArrowDown,
  faArrowTrendUp,
  faPlay,
  faArrowUpRightFromSquare,
  faDownload,
  faStore,
  faPause,
  faClock,
  faArrowRight,
  faMagnifyingGlass,
  faGem,
  faArrowRightToBracket,
  faBullseye,
  faUserGroup,
  faMedal,
  faBan,
  faFilter,
  faNewspaper,
  faGraduationCap,
  faCrown,
  faUser,
  faStar,
  faCrosshairs,
  faLocationDot,
  faFireFlameCurved,
  faL,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";


   const jogadores = [
  { id: 1, nome: "p1kachu", modo: "Global", tag: "[LLL]LLL", rating: 8.110, abates: 210, mortes: 93, vitorias: 19, kd: 2.26, partidas: 70, posicao: 1, ranked: 70 },
  { id: 2, nome: "SnipeKing", modo: "Duo", tag: "[GOD]SKG", rating: 7.980, abates: 198, mortes: 87, vitorias: 17, kd: 2.27, partidas: 65, posicao: 2, ranked: 65 },
  { id: 3, nome: "FazeBlack", modo: "Squad", tag: "[NTR]FZB", rating: 7.850, abates: 185, mortes: 91, vitorias: 15, kd: 2.03, partidas: 62, posicao: 3, ranked: 62 },
  { id: 4, nome: "xGhostBR", modo: "Global", tag: "[SKL]GHT", rating: 7.720, abates: 176, mortes: 88, vitorias: 14, kd: 2.00, partidas: 60, posicao: 4, ranked: 60 },
  { id: 5, nome: "TitanFPS", modo: "Duo", tag: "[TTN]FPS", rating: 7.650, abates: 170, mortes: 85, vitorias: 13, kd: 2.00, partidas: 58, posicao: 5, ranked: 58 },
  { id: 6, nome: "VortexGG", modo: "Squad", tag: "[VTX]GG", rating: 7.580, abates: 165, mortes: 90, vitorias: 12, kd: 1.83, partidas: 57, posicao: 6, ranked: 57 },
  { id: 7, nome: "NeonShot", modo: "Global", tag: "[NEN]SHT", rating: 7.490, abates: 160, mortes: 84, vitorias: 12, kd: 1.90, partidas: 55, posicao: 7, ranked: 55 },
  { id: 8, nome: "ShadowPVP", modo: "Duo", tag: "[SHD]PVP", rating: 7.400, abates: 155, mortes: 82, vitorias: 11, kd: 1.89, partidas: 54, posicao: 8, ranked: 54 },
  { id: 9, nome: "flamezfps", modo: "Global", tag: "[VLC]VLC", rating: 9.990, abates: 320, mortes: 76, vitorias: 11, kd: 1.87, partidas: 52, posicao: 9, ranked: 52 },
  { id: 10, nome: "CrownKill", modo: "Global", tag: "[CRW]KLL", rating: 7.250, abates: 145, mortes: 79, vitorias: 10, kd: 1.83, partidas: 51, posicao: 10, ranked: 51 },
  { id: 11, nome: "PhantomBR", modo: "Duo", tag: "[PHT]BR", rating: 7.180, abates: 142, mortes: 78, vitorias: 10, kd: 1.82, partidas: 50, posicao: 11, ranked: 50 },
  { id: 12, nome: "StormFive", modo: "Squad", tag: "[STM]FV", rating: 7.100, abates: 138, mortes: 77, vitorias: 9, kd: 1.79, partidas: 49, posicao: 12, ranked: 49 },
  { id: 13, nome: "ApexRaider", modo: "Global", tag: "[APX]RD", rating: 7.020, abates: 135, mortes: 76, vitorias: 9, kd: 1.77, partidas: 48, posicao: 13, ranked: 48 },
  { id: 14, nome: "ZenithPVP", modo: "Duo", tag: "[ZNT]PVP", rating: 6.950, abates: 132, mortes: 75, vitorias: 8, kd: 1.76, partidas: 47, posicao: 14, ranked: 47 },
  { id: 15, nome: "IronSight", modo: "Squad", tag: "[IRN]SGT", rating: 6.880, abates: 129, mortes: 74, vitorias: 8, kd: 1.74, partidas: 46, posicao: 15, ranked: 46 },
  { id: 16, nome: "BlitzKill", modo: "Global", tag: "[BLT]KLL", rating: 6.800, abates: 126, mortes: 73, vitorias: 8, kd: 1.72, partidas: 45, posicao: 16, ranked: 45 },
  { id: 17, nome: "RavenFPS", modo: "Duo", tag: "[RVN]FPS", rating: 6.720, abates: 123, mortes: 72, vitorias: 7, kd: 1.70, partidas: 44, posicao: 17, ranked: 44 },
  { id: 18, nome: "CyberShot", modo: "Squad", tag: "[CYB]SHT", rating: 6.650, abates: 120, mortes: 71, vitorias: 7, kd: 1.69, partidas: 43, posicao: 18, ranked: 43 },
  { id: 19, nome: "OmegaBR", modo: "Global", tag: "[OMG]BR", rating: 6.580, abates: 117, mortes: 70, vitorias: 7, kd: 1.67, partidas: 42, posicao: 19, ranked: 42 },
  { id: 20, nome: "LunarKill", modo: "Duo", tag: "[LNR]KLL", rating: 6.500, abates: 114, mortes: 69, vitorias: 6, kd: 1.65, partidas: 41, posicao: 20, ranked: 41 },
  { id: 21, nome: "NovaPVP", modo: "Squad", tag: "[NVA]PVP", rating: 6.420, abates: 111, mortes: 68, vitorias: 6, kd: 1.63, partidas: 40, posicao: 21, ranked: 40 },
  { id: 22, nome: "DuskRaider", modo: "Global", tag: "[DSK]RD", rating: 6.350, abates: 108, mortes: 67, vitorias: 6, kd: 1.61, partidas: 39, posicao: 22, ranked: 39 },
  { id: 23, nome: "VenomFPS", modo: "Duo", tag: "[VNM]FPS", rating: 6.280, abates: 105, mortes: 66, vitorias: 5, kd: 1.59, partidas: 38, posicao: 23, ranked: 38 },
  { id: 24, nome: "ArcticGG", modo: "Squad", tag: "[ARC]GG", rating: 6.200, abates: 102, mortes: 65, vitorias: 5, kd: 1.56, partidas: 37, posicao: 24, ranked: 37 },
  { id: 25, nome: "CobraKill", modo: "Global", tag: "[CBR]KLL", rating: 6.120, abates: 99, mortes: 64, vitorias: 5, kd: 1.54, partidas: 36, posicao: 25, ranked: 36 },
  { id: 26, nome: "FrostBR", modo: "Duo", tag: "[FRS]BR", rating: 6.050, abates: 96, mortes: 63, vitorias: 4, kd: 1.52, partidas: 35, posicao: 26, ranked: 35 },
  { id: 27, nome: "ToxicPVP", modo: "Squad", tag: "[TXC]PVP", rating: 5.980, abates: 93, mortes: 62, vitorias: 4, kd: 1.50, partidas: 34, posicao: 27, ranked: 34 },
  { id: 28, nome: "GlitchFPS", modo: "Global", tag: "[GLT]FPS", rating: 5.900, abates: 90, mortes: 61, vitorias: 4, kd: 1.47, partidas: 33, posicao: 28, ranked: 33 },
  { id: 29, nome: "HyperShot", modo: "Duo", tag: "[HYP]SHT", rating: 5.820, abates: 87, mortes: 60, vitorias: 3, kd: 1.45, partidas: 32, posicao: 29, ranked: 32 },
  { id: 30, nome: "MythicGG", modo: "Squad", tag: "[MYT]GG", rating: 5.750, abates: 84, mortes: 59, vitorias: 3, kd: 1.42, partidas: 31, posicao: 30, ranked: 31 },
]

const use = [
    {id: 1, nome: "285.115", subtexto: "CONTAS CRIADAS", categoria: "Caixas", icon: faUserGroup},
    {id: 2, nome: "R$ 800.000", subtexto: "EM PREMIAÇÕES", categoria: "Caixas", icon: faArrowTrendUp},
    {id: 3, nome: "100", subtexto: "CAMPEONATOS REALIZADOS", categoria: "roupa", icon: faMedal},
    {id: 4, nome: "2.692", subtexto: "CLÃS", categoria: "arma", icon: faTrophy},
    {id: 5, nome: "25.151", subtexto: "CONTAS BANDAS", categoria: "troca", icon: faBan},
  ]

 const status = [
  { id: 1, nome: "Vitorias", peso: "Maior peso", icon: faTrophy, nivel: 100, cor: "#fbbf24" },
  { id: 2, nome: "K/D Ratio", peso: "25%", icon: faCrosshairs, nivel: 83, cor: "#f87171" },
  { id: 3, nome: "Posição", peso: "25%", icon: faLocationDot, nivel: 83, cor: "#60a5fa" },
  { id: 4, nome: "Média de kills", peso: "20%", icon: faTrophy, nivel: 66, cor: "#4ade80" },
  { id: 5, nome: "Competitivo", peso: "Bônus entra", icon: faFireFlameCurved, nivel: 50, cor: "#c084fc" },
]

// const resultado = cards.filter(p => p.nome.toLowerCase().includes(busca.toLowerCase()))

  const cards = [
  { id: 1, nome: "Pack Destaque", descricao: "➡️ Os itens mais procurados da semana em um só pack.", imagens:["public/caixa.png"], categoria: "Principais", icon: faMedal, valor: 80 },
  { id: 2, nome: "Pack Semanal", descricao: "➡️ Novos itens toda semana com descontos especiais.", imagens:["public/caixanova.png"], categoria: "Principais", icon: faMedal, valor: 40 },
  { id: 3, nome: "Pack Especial", descricao: "➡️ Edição limitada com itens que não voltam mais.", imagens:["public/caixanova.png"], categoria: "Principais", icon: faMedal, valor: 120 },
  { id: 4, nome: "Caixa Verão", descricao: "➡️ Abra e ganhe itens exclusivos da temporada de verão.", imagens:["public/caixanova.png"] , categoria: "Caixas", icon: faUserGroup, valor: 50 },
  { id: 5, nome: "Caixa Neon", descricao: "➡️ Itens com visual neon que vão destacar seu personagem.", imagens:["public/caixa.png"], categoria: "Caixas", icon: faUserGroup, valor: 75 },
  { id: 6, nome: "Caixa Eclipse", descricao: "➡️ Itens sombrios e misteriosos para os mais ousados.", imagens:["public/caixanova.png"], categoria: "Caixas", icon: faUserGroup, valor: 100 },
  { id: 7, nome: "Premium Starter", descricao: "➡️ Acesse o modo ranqueado e comece sua jornada competitiva.", imagens:["public/caixa.png"], categoria: "Premium", icon: faGem, valor: 13 },
  { id: 8, nome: "Premium Boost", descricao: "➡️ Ganhe XP em dobro e suba de nível mais rápido.", imagens:["public/vip.png"], categoria:  "Premium", icon: faGem, valor: 30 },
  { id: 9, nome: "Premium Max", descricao: "➡️ Acesso completo a todos os modos e benefícios exclusivos.", imagens:["public/sub.png"], categoria: "Premium", icon: faGem, valor: 50 },
  { id: 10, nome: "Clã Fênix", descricao: "➡️ Entre em um clã ativo e dispute campeonatos em equipe.", imagens:["public/cla.png"], categoria: "Clãs", icon: faTrophy, valor: 20 },
  { id: 11, nome: "Clã Titan", descricao: "➡️ Compita com os melhores jogadores do servidor.", imagens:["public/cla.png"], categoria: "Clãs", icon: faTrophy, valor: 35 },
  { id: 12, nome: "Clã Vortex", descricao: "➡️ Um clã de alto nível para jogadores experientes.", imagens:["public/cla.png"], categoria: "Clãs", icon: faTrophy, valor: 60 },
  { id: 13, nome: "Token Prata", descricao: "➡️ Troque por itens exclusivos na loja de tokens.", imagens:["public/token.png"], categoria: "Token de Troca", icon: faStar, valor: 10 },
  { id: 14, nome: "Token Ouro", descricao: "➡️ Acesse itens raros disponíveis apenas com tokens.",imagens:["public/token.png"],  categoria: "Token de Troca", icon: faStar, valor: 25 },
  { id: 15, nome: "Token Platina", descricao: "➡️ O token mais valioso, com acesso aos itens mais cobiçados.", imagens:["public/token.png"], categoria: "Token de Troca", icon: faStar, valor: 45 },
 
]

export default function Hero({ pagina, setPagina, selectedPlayer, setSelectedPlayer }) {
  const videoRef = useRef(null); 
  const [pausado, setPausado] = useState(false);
  const [aberto, setAberto] = useState(false)
  const [busca, setBusca] = useState("")
  const [produto, SetProduto] = useState(cards);
  const [filtro, SetFiltro] = useState("Todos");
  const [modal, SetModal] = useState(null);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [busca2, SetBusca2] = useState("");
  const [filtro2, SetFiltro2] = useState("Global");
  const [players, SetPlayers] = useState(jogadores);


  const categoriaPlayer = [ ... new Set(jogadores.map(p => p.modo))]
  const filtrados2 =  players.filter(p => p.modo === filtro2)
  const pesquisar = filtrados2.filter(p => p.nome.toLowerCase().includes(busca2.toLowerCase())) 




  const categoria = ["Todos", ... new Set(produto.map(p => p.categoria))]
  const filtrados = filtro === "Todos" ? produto : produto.filter(p => p.categoria === filtro)
  const resultado = filtrados.filter(p => p.nome.toLowerCase().includes(busca.toLowerCase()))
  
  const itensPorPagina = 4;

  const inicio = (paginaAtual - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;
  const itensDaPagina = pesquisar.slice(inicio, fim);
  const totalPaginas = Math.ceil(pesquisar.length / itensPorPagina);


  

const toggleVideo = () => {
  if (pausado) {
    videoRef.current.play();
    
  } else {
    videoRef.current.pause();
    
  }
  setPausado(!pausado);
}



  const premium = [
    {
      id: 1,
      name: "PREMIUM BASIC",
      icon: faGem,
      coroa: faCrown,
      valor: 13,
      botaoFundo: "bg-[#0a1a2e]",
      cor: "text-[#a1a1aa]",
      titulo: "text-[#a1a1aa]",
      corText: "text-[#a1a1aa]",
      botao: "Comprar na Loja",
      iconCor: "text-[#a1a1aa]",
      fundo: "bg-[#0a1a2e]",
      iconFundo: "bg-[#0a1a2e]",
      bttText: "text-white",
      borda: "border-[#0a1a2e]",
      hoverBorde: "hover:border-[#0058ad]",
      bordas: "border-[#0058ad]",
      hover: "hover:bg-[#0058ad]",
      planoIcon: faClock,
      plano: "7 dias",
      plus: "",
      obs: "",
      subtexto: "Todos os beneficios do premium, porém com duração reduzida. ideal para experimentar.",
      beneficios: [
        {icon: faCrown, texto:"Acesso ao modo ranqueado"},
        {icon: faCrown, texto:"Sala Premium no Discord"},
        {icon: faCrown, texto:"Lobbys de alta performance"},
        {icon: faCrown, texto:"Duração de 7 dias"},
      ]
    },
    {
      id: 2,
      name: "PREMIUM",
      icon: faGem,
      coroa: faCrown,
      cor: "text-[#a1a1aa]",
      titulo: "text-[#60b9fa]",
      corText: "text-[#60b9fa]",
      borda: "border-[#0083ed]",
      botaoFundo: "bg-[#0083ed]",
      bttText: "text-white",
      bordas: "border-[#0083ed]",
      linha: "border-[#040d16]",
      fundo: "bg-[#061f37]",
      iconFundo: "bg-[#061f37]",
      botao: "Comprar na Loja",
      iconCor: "text-[#60b9fa]",
      hover: "hover:bg-[#0070d6]",
      valor: 30,
      plano: "30 dias",
      planoIcon: faClock,
      plus: "MAIS POPULAR",
      obs: "",
      subtexto: "Acesso ao modo ranqueado do servidor! Você também precisa fazer parte de um Clã para ter acesso as filas ranqueadas.",
      beneficios: [
        {icon: faCrown, texto:"Acesso ao modo ranqueado"},
        {icon: faCrown, texto:"Sala Premium no Discord"},
        {icon: faCrown, texto:"Lobbys de alta performance"},
        {icon: faCrown, texto:"Jogue campeonatos"},
        {icon: faCrown, texto:"Requer participação em um Clã"},
        {icon: faCrown, texto:"Duração de 30 dias"},
      ]
    },
    {
      id: 3,
      name: "PREMIUM+",
      icon: faGem,
      coroa: faCrown,
      cor: "text-[#c4c5ca]",
      corText: "text-[#fbbf24]",
      titulo: "text-[#fbbf24]",
      iconFundo: "bg-[#1f2220]",
      iconCor: "text-[#ffca24]",
      botao: "Adquirir Premium+",
      fundo: "bg-[#1f2220]",
      bttText: "text-black",
      botaoFundo: "bg-[#f59e0b]",
      bordas: "border-[#966715]",
      borda: "border-[#966715]",
      hover: "hover:bg-[#fbbf24]",
      valor: 50,
      plano: "30 dias",
      hoverBorde: "hover:border-[#fbbf24]",
      planoIcon: faClock,
      plus: "mais completo",
      obs: "* A caixa resgatada será a caixa que estiver ativa no momento da compra do Premium+.",
      subtexto: "A experiencia completa. Todos os beneficios do Premium com um bonus exclusivo: uma caixa que estiver ativa no momento da compra.",
      beneficios: [
        {icon: faCrown, texto:"Tudo do Premium incluso"},
        {icon: faCrown, texto:"Acesso ao modo ranqueado"},
        {icon: faCrown, texto:"Lobbys de alta performance"},
        {icon: faCrown, texto:"Jogue campeonatos"},
        {icon: faCrown, texto:"Edição ilimitada de avatar e banner"},
        {icon: faCrown, texto:"+1 Caixa ativa no momento da Compra *"},
        {icon: faCrown, texto:"Duração de 30 dias"},
      ]
    }
  ]

  return (
    <section className="text-white p-7 mt-16 lg:p-0 flex flex-col min-h-screen">
      
      {pagina === "inicio" && (
        <>
          <div className="w-full mt-48 relative  flex flex-col"> 
            <div className="max-w-lg text-center flex flex-col gap-2 mx-auto w-full">
              <img className="w-12 h-12 mx-auto" src="bolinha.svg" alt="" />
              <h1 className="uppercase font-extrabold text-center text-5xl tracking-tight">goat royale</h1>
              <p className="text-[#6d6d76] uppercase text-sm tracking-[0.3em]">by players, for players</p>
              <span className="mt-5">
                <h1 className="text-[5rem] font-extrabold uppercase">O <span className="text-[#0083ed]">#1 </span>pvp</h1>
                <p className="text-lg font-bold uppercase pb-4 text-[#96979f]">Mais jogador do mundo</p>
              </span>
              <div className="bg-[#071422] items-center gap-2 py-2 px-3 mx-auto rounded-lg border border-[#0a1a2e] flex">
                <FontAwesomeIcon icon={faUsers} className="text-blue-500" />
                <p>532</p>
                <span className="h-5 border border-[#202c39]"></span>
                <div className="animate-pulse bg-[#1ea753] w-2 h-2 rounded-full"></div>
              </div>
              <button className="font-semibold min-w-[200px] h-[52px] bg-[#0083ed] mx-auto text-lg mt-2 uppercase w-full md:w-fit px-12 py-3 rounded-md flex items-center justify-center">
                Jogue agora
              </button>
            </div>
          </div>

          <p className="text-xs pb-32  mt-32 lg:px-64 px-2  pt-10 tracking-tight font-grotesk text-center text-[#71717A]">
            O GOAT não é afiliado ou endossado pela Take-Two, Rockstar North Interactive ou qualquer outro detentor de direitos autorais. Todas as marcas registradas utilizadas são de propriedade de seus respectivos proprietários e não são afiliadas ou endossadas pela Take-Two, Rockstar North Interactive.
          </p>
          <section className=" pb- mt-14 flex flex-col">
            <div className=" flex flex-col w-full max-w-7xl mx-auto">
              <div className="mx-auto text-center ">
                <h2 className="text-xl pb-4 font-bold px-4">NOSSA TRAJETÓRIA</h2>
                <p className="text-sm md:text-base max-w-2xl text-[#9697a0]">O que é GOAT?</p>
              </div>
              <div className="bg-[#071422]  border border-[#0a1a2e] hover:bg-[#071322] mt-10 md:p-8 rounded-xl p-6">
                <p className="text-center text-[#c6c7cc]">
                  O GOAT nasceu com um propósito claro: criar o ambiente competitivo mais acessível, justo e envolvente do GTA, colocando a comunidade no centro de tudo. Mais do que um servidor, o GOAT é um ecossistema competitivo onde todos os tipos de jogadores têm espaço para competir, evoluir e fazer história. Icon GOAT Royale Português</p>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-5">
                {use.map(p => (
                  <div key={p.id} className="flex flex-col gap-3 bg-[#071422] p-5 text-center rounded-xl ">
                    <div className="border  w-12 h-12 flex items-center rounded-lg justify-center mx-auto  bg-[#0a1a2e] border-[#0058ad]">
                      <FontAwesomeIcon icon={p.icon} className="text-blue-500" / >
                    </div>
                    <h3 className="text-3xl tracking-tight font-bold  text-[#0083ed]">{p.nome}</h3>
                    <p className="mt- w-40 mx-auto text-xs font-semibold tracking-wider min-h-[3rem]  flex items-center justify-center text-[#6f6f78]">{p.subtexto}</p>
                  </div>
                ))}
              </div>
              <div className="mt-16  flex flex-col items-center">
                <button
                onClick={() => setAberto(!aberto)}
                className={`border border-[#0058ad] duration-300 h-10 transition-all  items-center rounded-lg py-2 px-6 gap-3 flex text-[#c3c4c9] text-sm font-medium whitespace-nowrap bg-[#040d16]`}
                >
                {aberto === false ? "Ler Mais" : "Ler Menos"}
                <FontAwesomeIcon className="text-[10px] " icon={ aberto === false ? faChevronDown : faChevronUp}/>
                </button>
                
                {aberto && (
                <div className="mt-10   w-full flex flex-col gap-6 overflow-hidden relative">
                   <div className="border mb-10 border-[#0a1a2e]  bg-[#071422] border-goat-800 bg-goat-900 rounded-xl p-6 transition-colors hover:bg-goat-800/50 z-10">
                    <h3 className="text-[#fafafa] font-bold mb-5 text-center">NOSSA HISTORIA</h3>
                    <p className="text-sm text-[#95959f] md:text-base leading-relaxed mb-4">O GOAT foi fundado em <span className="text-white"> 30 de setembro de 2023 </span>por dois idealizadores: um programador e um criador de conteúdo, ambos com ampla experiência em comunidades competitivas, transmissões ao vivo e organização de eventos dentro do GTA.</p>
                    <p className="text-sm text-[#95959f] md:text-base leading-relaxed mb-4">Desde sua origem, o GOAT enfrentou desafios relevantes e nunca escondeu suas cicatrizes. O primeiro grande campeonato do projeto apresentou problemas técnicos significativos durante uma transmissão ao vivo com milhares de espectadores, colocando em risco a sua continuidade. Ainda assim, a resposta da comunidade foi determinante, <span className="text-white"> demonstrando confiança no GOAT e incentivando uma nova tentativa.</span></p>
                    <p className="text-sm text-[#95959f] leading-relaxed md:text-base">A partir desse momento, foram tomadas decisões estratégicas, incluindo a reestruturação completa do projeto, a entrada de novos colaboradores e a reformulação do sistema competitivo. Esse processo representou um ponto de virada. O GOAT Challenge, primeiro campeonato realizado e na época ainda duo, consolidou-se como um sucesso técnico e competitivo, abrindo caminho para o lançamento público do servidor, hoje mais estável, mais competitivo e em constante evolução.</p>
                  </div>

                  <div className="border mb-10 border-[#0a1a2e]  bg-[#071422] border-goat-800 bg-goat-900 rounded-xl p-6 transition-colors hover:bg-goat-800/50 z-10">
                    <h3 className="text-[#fafafa] font-bold mb-5 text-center">CRESCIMENTO E CONSOLIDAÇÃO</h3>
                    <div className="border p-5 rounded-lg border-[#0a1a2e] text-[#cecfd3] bg-[#071422]">
                      <p className="text-sm md:text-base leading-relaxed mb-4">Com o servidor aberto ao público, o GOAT cresceu de forma orgânica, impulsionado principalmente pela confiança da comunidade e pelo desejo coletivo de manter um espaço competitivo acessível e público.</p>
                      <p className="text-sm md:text-base leading-relaxed mb-4">Ao longo de mais de dois anos de operação, o GOAT alcançou marcas expressivas.</p>
                      <p className="text-sm md:text-base leading-relaxed ">Mais do que milhões de partidas casuais e competitivas realizadas, o projeto sempre manteve um compromisso sólido com regras claras, sistemas automatizados e decisões transparentes, comunicadas de forma aberta com a comunidade.</p>

                    </div>
                  </div>

                  <div className="border mb-10 border-[#0a1a2e]  bg-[#071422] border-goat-800 bg-goat-900 rounded-xl p-6 transition-colors hover:bg-goat-800/50 z-10">
                    <h3 className="text-[#fafafa] font-bold mb-5 text-center">O QUE NOS DIFERENCIA</h3>
                    <div className="grid  grid-cols-1 lg:grid-cols-3 gap-4 ">
                      <div className="border bg-[#071422] p-3.5 rounded-lg border-[#0a1a2e] flex flex-col gap-3">
                        <p className="font-bold text-[#e0e2e4]">Competitivo de verdade</p>
                        <p className="text-[#9697a0] text-sm ">Foco em habilidade, estratégia e consistência.</p>
                      </div>
                      <div className="border bg-[#071422] gap-3 flex flex-col border-[#0a1a2e] p-3.5 rounded-lg">
                        <p className="font-bold text-[#e0e2e4]">Acessível</p>
                        <p className="text-sm text-[#9697a0]">Qualquer jogador pode competir, do iniciante ao experiente.</p>
                      </div>
                      <div className="border bg-[#071422] p-3.5 rounded-lg border-[#0a1a2e] flex flex-col gap-3">
                        <p className="font-bold text-[#e0e2e4]">Comunidade em primeiro lugar</p>
                        <p className="text-[#9697a0] text-sm font-medium">Decisões pensadas para quem joga.</p>
                      </div>
                      <div className="border bg-[#071422] p-3.5 rounded-lg border-[#0a1a2e] flex flex-col gap-3">
                        <p className="font-bold text-[#e0e2e4]">Transparência</p>
                        <p className="text-[#9697a0] text-sm font-medium">Clareza nas decisões e diálogo aberto com a comunidade.</p>
                      </div>
                      <div className="border bg-[#071422] p-3.5 rounded-lg border-[#0a1a2e] flex flex-col gap-3">
                        <p className="font-bold text-[#e0e2e4]">Evolução constante</p>
                        <p className="text-[#9697a0] text-sm font-medium">O servidor está sempre em atualização para oferecer o melhor pra comunidade.</p>
                      </div>
                      <div className="border bg-[#071422] p-3.5 rounded-lg border-[#0a1a2e] flex flex-col gap-3">
                        <p className="font-bold text-[#e0e2e4]">Segurança e Integridade</p>
                        <p className="text-[#9697a0] text-sm font-medium">Proteção rigorosa contra trapaças. Um ambiente onde apenas a habilidade define o vencedor.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border mb-10 pb-10 border-[#0a1a2e]  bg-[#071422] border-goat-800 bg-goat-900 rounded-xl p-6 transition-colors hover:bg-goat-800/50 z-10">
                    <h3 className="text-[#fafafa] font-bold mb-5 text-center uppercase">NOSSA visão V</h3>
                    <p className="text- text-[#9b9ca5] mb-5">Hoje, o GOAT é uma das <span className="text-white"> maiores plataformas competitivas de GTA do mundo</span>, com uma base fiel, jogadores engajados e uma história construída jogo após jogo, respeitando todo um processo, sem atropelar e sem crescer nas costas de ninguém.</p>
                    <p className="text-center uppercase text-[#c8c8ce]  font-semibold text-xs tracking-widest">O futuro do GOAT passa por</p>
                     
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  mt-6">
                      <div className="border flex items-center gap-4 p-4 rounded-lg bg-[#071422] border-[#0a1a2e]">
                        <span className="bg-[#0a1a2e] p-2.5 inset-0 flex items-center rounded-lg justify-center">
                          <FontAwesomeIcon icon={faBullseye} className="text-blue-500 w-5 h-5" />
                        </span>
                        <p className="text-[#c8c9cd] text-sm font-medium">Novos formatos competitivos.</p>
                      </div>
                      <div className="border flex items-center gap-4 p-4 rounded-lg bg-[#071422] border-[#0a1a2e]">
                        <span className="bg-[#0a1a2e] p-2.5 inset-0 flex items-center rounded-lg justify-cent">
                          <FontAwesomeIcon icon={faArrowTrendUp} className="w-5 h-5 text-blue-500" />
                        </span>
                        <p className="text-[#c8c9cd] text-sm font-medium">Expansão de modos e servidores.</p>
                      </div>
                      <div className="border flex items-center gap-4 p-4 rounded-lg bg-[#071422] border-[#0a1a2e]">
                        <span className="bg-[#0a1a2e] p-2.5 inset-0 flex items-center rounded-lg justify-cent">
                          <FontAwesomeIcon icon={faTrophy} className="w-5 h-5 text-blue-500" />
                        </span>
                        <p className="text-[#c8c9cd] text-sm font-medium">Eventos especiais e campeonatos.</p>
                      </div>
                      <div className="border flex items-center gap-4 p-4 rounded-lg bg-[#071422] border-[#0a1a2e]">
                        <span className="bg-[#0a1a2e] p-2.5 inset-0 flex items-center rounded-lg justify-cent">
                          <FontAwesomeIcon icon={faUserGroup} className="w-5 h-5 text-blue-500" />
                        </span>
                        <p className="text-[#c8c9cd] text-sm font-medium">Relação com a comunidade.</p>
                      </div>
                     </div>
                     <div className="mt-10 bg-[#071422] border hover:bg-[#081627] border-[#0a1a2e]  rounded-lg p-6 md:p-8 ">
                      <div className="flex   flex-col md:flex-row gap-8 items-center justify- w-full">
                        <div className="flex-1  w-full md:w-1/2 flex flex-col justify-center">
                          <div className="text-sm mb-3 gap-1.5 flex tracking-wide flex-col border-l-2 pl-4 border-[#063764] text-[#666772]">
                            <p>"O GOAT não é só sobre ganhar partida.</p>
                            <p>Não é sobre ganhar dinheiro em cima da comunidade.</p>
                            <p>Não é sobre fazer o que pensa e achar melhor pra si."</p>
                          </div>
                          <h3 className="text-base  md:text-lg font-bold text-zinc-50 leading-tight mt-3">
                            É sobre <span className="text-blue-500">pertencer</span>, <br />competir e fazer parte.
                          </h3>
                        </div>
                        <div className="flex-1 w-full md:w-1/2 md:items-end items-center flex flex-col justify-center ">
                        <img className="w-64 mb-3 " src="goat-logo.svg" alt="" />
                        <p className="font-medium text-[#c6c7cc] ">De jogador. Para jogador.</p>
                        <p className="text-[#666772] text-sm">CRIADO PELA COMUNIDADE</p>
                        </div>
                      </div>
                     </div>
                  </div>
                </div> 
                )}
              </div>
            </div>
          </section>
          <section className="pb-64  mt-32">
            <div className="w-full max-w-7xl  mx-auto  flex flex-col">
              <div className="flex flex-col gap-6 items-center justify-center">
                <h2 className=" max-w-3xl uppercase text-3xl font-bold w-full text-center">como jogar</h2>
                <p className="text-zinc-500 font-medium text-lg">Assita ao vídeo tutorial e siga os pasasos para jogar no <span className="text-blue-500">GOAT</span>.</p>
              </div>

              <div className="flex flex-col mt-14 items-center">
                <div className=" w-full relative max-w-5xl">
                 <div className="relative">
                  <video ref={videoRef}  className="rounded-xl border border-[#0a1a2e]" src="goat.mp4" />
                   <button onClick={toggleVideo} className="absolute bg-[#0c263c] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   hover:bg-black/75 duration-300 p-6  border-[#054d88] border rounded-full ">
                   <FontAwesomeIcon icon={pausado ? faPlay : faPause} />
                   </button>
                 </div>
                </div>
              </div>
              <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-4  items-center">
                <div className="border bg-[#071422] text-center gap- border-[#0a1a2e] rounded-xl items-center flex flex-col relative p-6">
                  <div className=" w-full   flex flex-col items-center gap-3 flex-grow">
                    <div className="border bg-[#0a1a2e] border-[#0058ad] p-3 rounded-xl flex items-center justify-center ">
                      <span className="absolute top-3 w-7 font-bold h-7 flex items-center justify-center left-[13.5rem] border rounded-full bg-[#0083ed] border-black ">1</span>
                      <FontAwesomeIcon icon={faShoppingCart} className="w-7 text-blue-500 h-7" / >
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">Adquira o GTA V</h3>
                    <p className="text-sm text-[#9697a1] font-medium leading-relaxed">Compre o Grand Theft Auto V na Steam ou Epic Games. Você precisa ter o jogo original instalado para jogar no FiveM.</p>
                    <div className="flex gap-3 items-">
                      <button className="flex gap-1.5 py-1.5 p-3 duration-300 transition-all bg-[#0a1a2e] border-[#0058ad] hover:bg-[#0058ad] hover:text-white rounded-md border text-xs items-center text-[#b6b8bf] font-medium ">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <p>Steam</p>
                      </button>
                      <button className="flex bg-[#0a1a2e] duration-300 transition-all items-center hover:text-white hover:bg-[#0058ad] text-xs border py-1.5  border-[#0058ad]  px-3  rounded-md text-[#cecfd3] gap-1.5">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <p>Epic</p>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border bg-[#071422] text-center gap- border-[#0a1a2e] rounded-xl items-center flex flex-col relative p-6">
                  <div className=" w-full   flex flex-col items-center gap-3 flex-grow">
                    <div className="border bg-[#0a1a2e] border-[#0058ad] p-3 rounded-xl flex items-center justify-center ">
                      <span className="absolute top-3 w-7 font-bold h-7 flex items-center justify-center left-[13.5rem] border rounded-full bg-[#0083ed] border-black ">2</span>
                      <FontAwesomeIcon icon={faCloudArrowDown} className="w-7 text-blue-500 h-7" / >
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">Instale o FiveM Gratuitamente</h3>
                    <p className="text-sm text-[#9697a1] font-medium leading-relaxed">Baixe e instale o FiveM, a plataforma de modificação que permite jogar em servidores customizados como o GOAT.</p>
                    <div className="flex gap-3 items-">
                      <button className="flex gap-1.5 py-1.5 p-3 duration-300 transition-all bg-[#0a1a2e] border-[#0058ad] hover:bg-[#0058ad] hover:text-white rounded-md border text-xs items-center text-[#b6b8bf] ">
                       <FontAwesomeIcon icon={faDownload} />
                       <p className="font-medium">Instale o FiveM</p>
                       <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </button>
                    </div>
                  </div>
                </div>


                <div className="border bg-[#071422] text-center gap- border-[#0a1a2e] rounded-xl items-center flex flex-col relative p-6">
                  <div className=" w-full   flex flex-col items-center gap-3 flex-grow">
                    <div className="border bg-[#0a1a2e] border-[#0058ad] p-3 rounded-xl flex items-center justify-center ">
                      <span className="absolute top-3 w-7 font-bold h-7 flex items-center justify-center left-[13.5rem] border rounded-full bg-[#0083ed] border-black ">1</span>
                      <img className="w-7 h-7" src="bolinha.svg" alt="" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">Conecte-se ao GOAT</h3>
                    <p className="text-sm text-[#9697a1] font-medium leading-relaxed">Abra o FiveM, pesquise por "GOAT" na lista de servidores ou clique no botão "Jogue Agora" para conectar diretamente.</p>
                    <div className="flex gap-3 items-">
                      <button className="flex gap-1.5 py-1.5 p-3 duration-300 transition-all bg-[#0083ed] border-[#0058ad] hover:bg-[#0058ad] hover:text-white rounded-md border text-xs items-center text-[#cecfd3] ">
                       <FontAwesomeIcon icon={faPlay} className="text-white" />
                       <p className="font-bold text-sm text-white">Joque Agora</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className=" flex flex-col max-w-7xl mx-auto items- pb-28">
              <div className="mb-20  gap-3 w-full text-center ">
                <p className="uppercase mb-3 text- font-bold">premium</p>
                <h1 className="text-5xl mt-3 font-bold    mx-auto">Escolha seu plano <span className="text-blue-500">PREMIUM</span></h1>
                <p className="mt-4 max-w-2xl text-zinc-400 font-medium  text-sm md:text-base mx-auto ">
                  Desbloqueie o modo ranqueado e aproveite o melhor do Goat Royale
                </p>
              </div>
              <div className=" w-full grid grid-cols-1  lg:grid-cols-3 items-center gap-5">
                {premium.map(p => (
                  <div key={p.id} className={`border ${p.linha}   relative duration-300 transition-all flex-1 ${p.hoverBorde}  rounded-lg ${p.borda}  h-full bg-[#071422] border-[#0a1a2e] p-6 md:p-8 flex flex-col`}>
                    <div className={`absolute -top-3 right-1/2 translate-x-1/2 text-xs rounded-lg px-2  py-1 ${p.botaoFundo} font-bold `}>
                        <p className={`${p.bttText} uppercase `}>{p.plus}</p>
                      </div>
                    <div className="mb-6 relative ">
                      <div className="flex  items-center gap-2 mb-1">
                        <FontAwesomeIcon icon={p.coroa} className={`${p.iconCor}  ${p.iconCor}  `} />
                        <p className={`${p.cor && p.corText} font-bold text-sm ${p.titulo}`}>{p.name}</p>
                      </div>
                      <div className="mt-4 flex  items-end gap-2">
                        <div className="flex items-center  gap-2">
                          <FontAwesomeIcon icon={p.icon} className={`text-2xl  ${p.iconCor}  `} />
                          <h2 className={`text-6xl font-extrabold ${p.iconCor}  tracking-tight`}>{p.valor}</h2>
                        </div>
                        <p className={`${p.cor} text-sm mb-2`}>diamantes</p>
                      </div>
                      <div className={` flex  items-center mt-3`}>
                        <div className={`border p-1 rounded-md px-2 ${p.fundo && p.borda} ${p.iconFundo} ${p.borda} flex items-center gap-1.5 text-xs `}>
                          <FontAwesomeIcon icon={p.planoIcon} className={`${p.cor} ${p.iconCor} w-3 h-3`} / >
                          <p className={`${p.cor} ${p.iconCor} font-medium`}>{p.plano}</p>
                        </div>
                      </div>
                    </div>
                    <p className={`text-sm mt-2 mb-3 ${p.cor} font-medium`}>{p.subtexto}</p>
                    <ul className={`flex  mt-3.5 mb-8 flex-1 flex-col gap-3 `}>
                      {p.beneficios.map((b, index) => (
                        <li key={index} className="items-start flex gap-3">
                          <div className={` rounded-md w-5 ${p.fundo} ${p.iconFundo} h-5 flex items-center justify-center`}>
                            <FontAwesomeIcon icon={p.icon} className={`w-3 ${p.cor} ${p.iconCor} h-3`} / >
                          </div>
                          <span className={`text-sm font-medium tracking-tight ${p.cor}`}>
                            {b.texto}
                          </span>
                        </li>
                      ))}    
                    </ul>
                    {p.obs && (
                      <p className={`text-xs mb-4 ${p.cor} opacity-60`}>{p.obs}</p>
                     )}
                    <button className={`border duration-300 transition-all py-3 ${p.hover} rounded-lg  ${p.bttText} ${p.botaoFundo} ${p.borda}  ${p.bordas}   font-bold text-sm tracking-`}>
                      {p.botao}
                    </button>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-[#4b4c55] text-xs font-medium">
                Os diamantes podem ser adquiridos na loja. É necessário fazer parte de um Clã para acessar as filas ranqueadas.
              </p>
            </div>
          </section>
          <footer className="border-t border-[#0a1a2e] pt-20 pb-14 w-full flex flex-col ">
            <div className=" flex   flex-col max-w-7xl items- gap-5 justify-between mx-auto w-full">
              <div className="flex border-b flex-col gap-7 lg:flex-row pb-10 border-[#0a1a2e] w-full items-">
                <div className="flex w-full gap-3  flex-col flex-1 ">
                 <span>
                  <img className="lg:h-11 h-9" src="goat-logo.svg" alt="" />
                 </span>
                 <p className="text-sm font-medium text-[#9798a1]">BY PLAYERS, FOR PLAYERS.</p>
               </div>
               
               <div className="flex w-full gap-4 items-center  max-w-md p-4 rounded-lg bg-[#07131f] border-[#0a1a2e] border flex-1">
                <div className="flex-1 ">
                  <p className="text-xs  text-[#676d77]">
                    Sangue e violência gráfica, violência intensa, humor maduro, nudez, linguagem forte, conteúdo sexual intenso, uso de drogas e álcool.
                  </p>
                  <p className="text-xs font-medium leading-snug mt-1.5 opacity-55">Compras dentro do jogo, interação entre usuários.</p>
                </div>
                <img className="w-20" src="18.svg" alt="" />
               </div>
              </div>
              <div className="flex w-full border-b pb-6 border-[#0a1a2e] justify-between items-center ">
                <div className="flex flex-1 gap-1 w-full   items-center">
                  <span className=" w-10 h-10 flex duration-300 transition-all items-center justify-center rounded-lg hover:bg-[#0a1a2e]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"></path></svg>
                  </span>
                  <span className="w-10 cursor-pointer h-10 flex duration-300 transition-all items-center justify-center rounded-lg hover:bg-[#0a1a2e]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path></svg>
                  </span>
                  <span className="w-10 cursor-pointer h-10 flex duration-300 transition-all items-center justify-center rounded-lg hover:bg-[#0a1a2e]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"></path></svg>
                  </span>
                  <span className="w-10 cursor-pointer h-10 flex duration-300 transition-all items-center justify-center rounded-lg hover:bg-[#0a1a2e]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"></path></svg>
                  </span>
                  <span className="w-10 cursor-pointer h-10 flex duration-300 transition-all items-center justify-center rounded-lg hover:bg-[#0a1a2e]" >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path></svg>
                  </span>
                </div>
                <div className="border bg-[#071422] cursor-pointer py-2 rounded-lg px-3 border-[#0a1a2e]  flex items-center text-xs gap-3  ">
                  <img className="w-4 h-4 rounded-sm" src="brasil.svg" alt="" />
                  <p>Portugues</p>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
              <p className="text-xs  text-[#6e717a] leading-5  max-w-4xl ">Grand Theft Auto e Grand Theft Auto: San Andreas são marcas registradas da Take-Two Interactive Software. Todas as marcas são de propriedade de seus respectivos donos. GOAT não é afiliado ou endossado pela Rockstar, Take-Two ou titulares de direitos. GOAT não hospeda servidores de usuários e não se responsabiliza por conteúdo de terceiros.</p>
              <div className="flex pt-6 flex-col gap-3 lg:gap-0 lg:flex-row  text-xs border-[#0a1a2e] duration-300 transition-all items-center justify-between w-full mt-3 border-t">
                <p className=" text-[#676871]">© 2026 SPK Empreendimentos LTDA. Todos os direitos reservados.</p>
                <p className="text-[#676871] hover:text-blue-500 cursor-pointer">Termos de Uso</p>
              </div> 
            </div>
          </footer>
        </>
      )}

      {pagina === "squad" && (
        <>
          <section className=" w-full">
            <div className="mt-6  w-full max-w-7xl mx-auto">
              <div className="border text-center flex items-center flex-col bg-[#071422] p-5  rounded-xl border-[#0a1a2e]">
                 <div className=" flex flex-col gap-2 ">
                   <h1 className="text-4xl font-bold tracking-wider">
                    RANKING <span className="text-[#60b9fa]">SQUAD</span>
                   </h1>
                   <p className="text-[#d4d4d8] text-lg font-medium">DominGOAT (R$5.000,00)</p>
                 </div>
                 <div className="flex mt-5 border py-2 rounded-lg px-4 bg-[#0a1a2e] border-[#0058ad] items-center gap-2">
                  <FontAwesomeIcon icon={faClock} className="text-blue-500" /> 
                  <p className="text-sm font-medium">Aberto de Segunda-feira 16:00 à Sexta-feira 18:00</p>
                 </div>
                  <p className="text-xs mt-2 text-[#676872]">*Todos os horários são relativos ao GMT-3 (Horário de Brasília)</p>
              </div>
            </div>
          </section>
        </>
      )}

      {pagina === "loja" && (
        <>
        <section>
          <div className="w-full max-w-7xl mx-auto  mt-5 flex flex-col">
            <div className="flex   items-center gap-4 mb-6  w-full">
              <div className="">
                <span className="bg-[#04192c] w-10 h-10 flex items-center justify-center rounded-lg border-[#032e53] text-[#60b9fa]">
                   <FontAwesomeIcon icon={faStore} className="h-7" />
                </span>
              </div>
              <div className="">
                <h3 className="text-2xl font-bold">Loja</h3>
                <p className="text-[#71717a] text-sm">Encontre itens exclusivos para sua coleção</p>
              </div>
            </div>
            <div className="border mb-7 w-full flex flex-col  bg-[#071422] p-5 rounded-lg border-[#0a1a2e]">
              <p className="text-sm uppercase">categorias</p>
              <div className="flex mt-4  items-center justify-between">
                <div className="flex items-center  w-full flex-1 gap-4">
                  {categoria.map(cat => 
                    <button
                    key={cat}
                    onClick={() => SetFiltro(cat)}
                    className={` ${filtro === cat ? "bg-[#0083ed]" : "bg-[#071422] border border-[#0058ad] text-[#979fa6]"} px-3 py-1 text-sm  rounded-lg`}
                    >
                      {cat}
                    </button>
                  )}
                </div>
                <div className="relative    flex w-72 ">
                  <input 
                  value={busca}
                  onChange={(e) => {
                    setBusca(e.target.value)
                  }}
                  className="w-full bg-[#081728] border outline-none border-[#0058ad] py-2 text-sm px-4 rounded-lg"
                  placeholder="Pesquisar produtos..." 
                  />
                </div>
              </div>
            </div>
             {modal && (
              <div onClick={() => SetModal(null)} className="fixed  inset-0 backdrop-blur-[2px] bg-black/75  flex items-center justify-center z-50">
                <div onClick={(e) => e.stopPropagation()} className=" relative w-full overflow-hidden rounded-lg  border border-[#0a1a2e] items- max-w-2xl flex ">
                  <div className="flex bg-[#040d16] p-5    max-w-[278px] w-full flex-col ">
                    <div className="w-fit mb-4 px-2 rounded py-0.5 text-sm font-semibold bg-[#0083ed]">
                    <p className=" uppercase">novo</p>
                    </div>
                    <div className="w-48 rounded-lg border border-[#0a1a2e] p-3.5  bg-[#071422]">
                      <img className="flex w-36 p-1 mx-auto" src={modal.imagens} alt={modal.nome} />
                    </div>
                    <div className="  flex flex-col w-full mt-4">
                      <p className="text-lg whitespace-nowrap overflow-hidden  mb-1 font-bold">{modal.nome}</p>
                      <div className="bg-[#071422] mb-4 items-center gap-3 flex border mt-3.5 py-3 px-3 rounded-lg border-[#0a1a2e]">
                        <FontAwesomeIcon icon={faGem} className="text-blue-500" / >
                        <h3 className="text-lg font-bold">{modal.valor}</h3>
                      </div>
                      <button className="flex py-2 gap-2 hover:bg-[#0058ad] duration-300 transition-all rounded-lg items-center justify-center bg-[#0a1a2e] border-[#0058ad] text-sm  w-full border ">
                        <FontAwesomeIcon icon={faArrowRightToBracket} / >
                        <p>Fazer login</p>
                      </button>
                    </div>
                  </div>
                  <div className="bg-[#071422]  flex flex-col p-5 w-full">
                    <div className="flex items-center justify-between  ">
                      <h3 className="items-center font-semibold flex gap-2">
                        <span className="w-1 h-4 bg-[#0083ed] rounded-full"></span>
                        Sobre este item
                      </h3>
                      <span onClick={() => SetModal(null)} className=" cursor-pointer w-8 text-xs text-[#a1a1aa] h-8 flex items-center justify-center rounded-lg bg-[#0a1a2e] border border-[#014a91]">
                        X
                      </span>
                    </div>
                    <p className="mt-4 text-[#9697a0] text-sm md:text-base leading-relaxed max-w-none">
                      {modal.descricao}
                    </p>
                  </div>
                </div>
              </div>
             )}
            <div className="mt-3 flex flex-col  w-full">
              {!busca && (
                <div className="flex  w-full justify-between gap-4  items-center ">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9  border flex items-center justify-center rounded-md bg-[#04192c] border-[#032e53]">
                    <FontAwesomeIcon icon={faStar} / >
                  </span>
                  <p className="text-xl font-bold ">Principais</p>
                </div>
                <div className="border  w-full border-[#0a1a2e] "></div>
                <div className=" flex w-20 py-1  rounded-lg  bg-[#0a1a2e] text-xs items-">
                  <p className=" mx-auto text-[#676973]">{resultado.length} Itens</p>
                </div>
              </div>
              )}
              <div className={`grid grid-cols-1 lg:grid-cols-4 ${busca ? "mt-0" : "mt-7"}  items-center gap-4`}>
                {resultado.map(p => (
                  <div onClick={() => SetModal(p)} key={p.id} className="flex group duration-300 transition-all hover:border-[#034c88]   cursor-pointer relative overflow-hidden  flex-col border  rounded-xl bg-[#040d16] border-[#053660]">
                    <div className="absolute top-3  z-10  left-3 uppercase text-xs py-0.5 font-medium rounded px-2 bg-[#0083ed]">
                      <p>Novo</p>
                    </div>
                    <img className="flex  p-6 duration-300 transition-all  w-60 h-full group-hover:scale-105 object-contain mx-auto" src={p.imagens} alt={p.nome} />
                    <div className="bg-[#071422] pt-4 flex fle-col px-5    ">
                      <div className="">
                        <h2 className="font-semibold mb-1.5">{p.nome}</h2>
                        <p className="text-[#6a707a] text-sm">{p.descricao}</p>
                         <div className="mt-5  flex items-center gap-2">
                          <FontAwesomeIcon icon={faGem} className="text-blue-500 w-5 h-5" />
                          <h1 className="font-bold text-lg">{p.valor}</h1>
                         </div>
                         <button onClick={(e) => e.stopPropagation()} className="flex py-2.5 duration-300 transition-all hover:bg-[#0058ad] rounded-lg px-4  items-center whitespace-nowrap border-[#0058ad] justify-between border w-full mt-3 mb-5">
                           <p className="text-sm font-medium">Fazer login</p>
                           <span>
                            <FontAwesomeIcon icon={faArrowRightToBracket} />
                           </span>
                         </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        </>
      )}

      {pagina === "descobrir" && (
        <>
         <section className="mt-4 pb-20 ">
           <div className=" mt-7  w-full  overflow-hidden  max-w-7xl mx-auto flex flex-col">
            <div className="bg-[#071422] border-[#0a1a2e] border rounded-xl    flex flex-col p-8 relative ">
              <div className="flex items-center mb-5 gap-3.5">
                <FontAwesomeIcon icon={faTrophy} className="text-3xl text-blue-500" / >
                <h2 className="text-5xl font-bebas font-bold tracking-wide">DESCUBRA OS MELHORES</h2>
              </div>
              <p className="mb-6 font-lg font-medium text-[#9ca2a8]">Os jogadores mais bem ranqueados da temporada atual</p>
              <div className=" relative w-full max-w-2xl">
                <input 
                value={busca2}
                className="w-full py-3 outline-none  rounded-lg placeholder:text-[#656e73] px-4 hover:bg-[#0a1a2e]   text-sm  hover:border-[#0058ad] bg-[#040d16]"
                onChange={(e) => {
                  SetBusca2(e.target.value)
                } }
                placeholder="Buscar por nome ou ID do jogador..."
                 />
              </div>
            </div>
            <div className="mt-5  w-full flex flex-col  p-6 rounded-lg bg-[#071422]">
              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faStar} className="text-[#fbbf24]" />
                  <h3 className="text-lg font-bold">Como funciona o Rating?</h3>
                </div>
                <div className="flex items-center gap-1">
                  <a className="text-[#38a9fa] text-sm" href="">Saiba mais</a>
                  <span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs text-[#38a9fa]" / >
                  </span>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-5 relative  w-full ">
                {status.map(p => (
                  <div key={p.id} className="flex border-[#0a1a2e] border items-center gap-3 rounded-lg p-4 bg-[#040d16]">
                    <FontAwesomeIcon icon={p.icon} className={`${p.icon === faTrophy ? "text-yellow-500" : p.icon === faCrosshairs ? "text-red-500" : p.icon === faLocationDot ? "text-[#60a5fa]" : "text-purple-500"}`} />
                    <div className="flex  flex-col">
                      <p className="text-xs mb-1 font-semibold">{p.nome}</p>
                      <div className="w-full bg-[#0a1a2e]  rounded-full  h-2">
                        <div className=" h-1.5   rounded-full  transition-all duration-300" style={{ width: `${p.nivel}%`, backgroundColor: p.cor }}></div>
                      </div>
                      <p className="text-[10px]  text-[#5c646d]">{p.peso}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 flex flex-col ">
              <div className="flex items-center justify-between gap-5">
                <div className="gap-4 bg-[#071422]  p-1 rounded-lg   flex items-center">
                  {categoriaPlayer.map(cat => (
                  <button
                  key={cat}
                  className={`p-2 rounded-lg px-5 text-sm flex items-center gap-4  ${filtro2 === cat ? "bg-[#0083ed]" : ""}`}
                  onClick={() => SetFiltro2(cat)}
                  >
                    <FontAwesomeIcon icon={faArrowTrendUp} / >
                    {cat}
                  </button>
                ))}
                </div>
                <div className="flex items-center gap-2 text-[#9b9e99] ">
                  <FontAwesomeIcon icon={faFilter} / >
                  <p className="text-sm"> {jogadores.length}  jogadores encontrados</p>
                </div>
              </div>
              <div className="mt-5 grid  grid-cols-1 lg:grid-cols-3 gap-4">
              {itensDaPagina.map((p, index) => (
                <div onClick={() => { setSelectedPlayer(p); setPagina("perfil"); }} key={p.id} className="group overflow-hidden relative w-full rounded-xl duration-300 transition-all hover:border-[#034c88] border-[#0a1a2e] border flex flex-col bg-[#071422]">
                  <div className="p-4  flex flex-col">
                  <div className=" flex   gap-3 border-b pb-3 border-[#0a1a2e]  relative">
                    <div className="overflow-hidden w-16 h-16 border-[#0a1a2e] group-hover:border-[#0083ed] border-2 rounded-lg">
                      <img className="w-full group-hover:scale-110 duration-300 transition-all object-cover " src="clo.png" alt="" />
                    </div>
                    <div className="flex flex-col   flex-1 ">
                      <p className="text-lg font-bold mb-1">{p.nome}</p>
                      <p className="text-xs text-[#60b9ec] font-bold mb-1.5">{p.tag}</p>
                      <div className="flex   gap-2 items-center ">
                          <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-[#fbbf24]" / >
                          <p className="text-[#fbbf24] font-bold text-2xl">{p.rating}</p>
                          <p className="text-xs text-[#6a727a]">RATING</p>
                      </div>
                    </div>
                    <div className="absolute right-0   ">
                     {index === 0 && (
                      <div className="flex items-center gap-1 border rounded-2xl text-sm px-2.5 p-1.5 border-[#8f7313]   bg-[#34331d]">
                        <FontAwesomeIcon icon={faTrophy} className="text-yellow-400" />
                        <p className="text-yellow-400 font-bold">1º</p>
                      </div>
                     )}
                    {index === 1 && (
                      <div className="flex border rounded-2xl text-sm px-2.5 p-1.5 border-[#5f6876]   bg-[#24303d] items-center gap-1">
                        <FontAwesomeIcon icon={faTrophy} className="text-gray-400" />
                        <p className="text-gray-400 font-bold">2</p>
                      </div>
                                         )}
                     {index === 2 && (
                       <div className="flex items-center gap-1 border rounded-2xl text-sm px-2.5 p-1.5 border-[#854f12]   bg-[#2d241c]">
                         <FontAwesomeIcon icon={faTrophy} className="text-amber-600" />
                         <p className="text-amber-600 font-bold">3</p>
                       </div>
                     )}
                     {index > 2 && <p className="text-[#6d7074] border rounded-full text-sm  p-2 bg-[#040d16]   border-[#0058ac] ">#{index + 1}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 mt-3 lg:grid-cols-4 gap-4 uppercase  w-full">
                    <div className="text-center">
                      <p className="text-base font-bold">{p.abates}</p>
                      <p className="text-[10px] text-[#6a7075]">abates</p>
                    </div>
                    <div className="text-center">
                      <p className="text-base font-bold">{p.mortes}</p>
                      <p className="text-[10px] text-[#6a7075]">mortes</p>
                    </div>
                    <div className="text-center">
                      <p className="text-base font-bold">{p.vitorias}</p>
                      <p className="text-[10px] text-[#6a7075]">vitorias</p>
                    </div>
                    <div className="text-center">
                      <p className="text-base font-bold">{p.kd}</p>
                      <p className="text-[10px] text-[#6a7075]">K/D</p>
                    </div>
                  </div>
                  <div className="grid mt-2 grid-cols-1 mb-2 mx-auto  w-full   lg:grid-cols-3 gap-2 pt-2 ">
                    <div className="flex   items-center gap-1.5 justify-center text-center">
                      <FontAwesomeIcon icon={faBullseye} className="text-[#545d66]" / >
                      <p className="text-xs text-[#848991]">{p.partidas} partidas</p>
                    </div>
                    <div className="flex  items-center gap-1.5 justify-center text-center ">
                      <FontAwesomeIcon icon={faArrowTrendUp} className="text-[#545d66]" / >
                      <p className="text-xs text-[#848991] ">Pos: {p.posicao}</p>
                    </div>
                    <div className="flex  items-center gap-1.5 justify-center text-center ">
                      <FontAwesomeIcon icon={faStar} className="text-[#545d66]" / >
                      <p className="text-[#848991] text-xs">{p.ranked} ranked</p>
                    </div>
                  </div>
                  </div>
                  <button className="border text-sm text-[#71717a] group-hover:text-white duration-300 transition-all bg-transparent py-3 border-[#0a1a2e] group-hover:bg-[#0083ed]  w-full mt-5 ">
                    Ver Perfil
                  </button>
                </div>
              ))}
            </div>
            <div className=" w-full mt-5  flex items-center gap-1 justify-center">
              {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(num => (
             <button
               key={num}
               onClick={() => setPaginaAtual(num)}
               className={`w-8 h-8 rounded-lg text-sm font-bold ${paginaAtual === num ? "bg-[#0083ed] text-white" : "bg-[#0a1a2e] text-[#6d7074]"}`}
             >
               {num}
             </button>
  ))}
            </div>
            </div>
           </div>
         </section>
        </>
      )}

      {pagina === "perfil" && selectedPlayer && (
  <section className="mt-4 pb-20">
    <div className="w-full max-w-7xl mx-auto">
      <button onClick={() => setPagina("descobrir")} className="mb-6 flex items-center gap-2 text-sm text-[#60b9fa]">
        ← Voltar
      </button>
      <div className="bg-[#071422] border border-[#0a1a2e] rounded-xl p-8">
        <div className="flex items-center gap-4">
          <img className="w-20 h-20 rounded-lg border-2 border-[#0083ed]" src="clo.png" alt="" />
          <div>
            <p className="text-2xl font-bold">{selectedPlayer.nome}</p>
            <p className="text-[#60b9ec] font-bold">{selectedPlayer.tag}</p>
            <p className="text-[#fbbf24] font-bold text-3xl mt-1">{selectedPlayer.rating} <span className="text-sm text-[#6a727a]">RATING</span></p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="bg-[#040d16] border border-[#0a1a2e] rounded-lg p-4 text-center">
            <p className="text-2xl font-bold">{selectedPlayer.abates}</p>
            <p className="text-xs text-[#6a7075] uppercase mt-1">Abates</p>
          </div>
          <div className="bg-[#040d16] border border-[#0a1a2e] rounded-lg p-4 text-center">
            <p className="text-2xl font-bold">{selectedPlayer.mortes}</p>
            <p className="text-xs text-[#6a7075] uppercase mt-1">Mortes</p>
          </div>
          <div className="bg-[#040d16] border border-[#0a1a2e] rounded-lg p-4 text-center">
            <p className="text-2xl font-bold">{selectedPlayer.vitorias}</p>
            <p className="text-xs text-[#6a7075] uppercase mt-1">Vitórias</p>
          </div>
          <div className="bg-[#040d16] border border-[#0a1a2e] rounded-lg p-4 text-center">
            <p className="text-2xl font-bold">{selectedPlayer.kd}</p>
            <p className="text-xs text-[#6a7075] uppercase mt-1">K/D</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)}

    </section>
    
  )
}