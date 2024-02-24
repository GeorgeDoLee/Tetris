import Game from "./components/Game";


function App() {
  return (
    <div className="overflow-hidden w-screen h-screen flex justify-center items-center bg-smokey-black text-anti-flash">
      <Game rows={20} columns={10} />
    </div>
  );
}

export default App;
