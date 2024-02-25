import "./styles.css";
import Game from './components/Game'

export default function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen overflow-hidden bg-smokey-black text-anti-flash">
      <Game rows={20} columns={10} />
    </div>
  );
}
