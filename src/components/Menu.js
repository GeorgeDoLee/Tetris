
const Menu = ({ onClick }) => (
  <div>
    <button 
      className="px-20 py-4 text-2xl font-bold text-center duration-300 rounded-md shadow-md bg-dun text-anti-flash hover:opacity-80 active:scale-95" 
      onClick={onClick}>
      Play Tetris
    </button>
  </div>
);

export default Menu;
