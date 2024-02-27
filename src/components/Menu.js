
const Menu = ({ onClick }) => (
  <div className="flex flex-col items-center justify-center gap-8">
    <button 
      className="px-20 py-4 text-2xl font-bold text-center duration-300 rounded-md shadow-md bg-dun text-smokey-black hover:opacity-80 active:scale-95" 
      onClick={onClick}>
      Play Tetris
    </button>
    <div>
      <div className="flex-col hidden gap-4 sm:flex">
        <div className="flex gap-2">
          <p><span className="p-1 font-bold rounded-md bg-dun text-smokey-black">up arrow</span> rotates</p>
        </div>
        <div className="flex gap-2">
          <p><span className="p-1 font-bold rounded-md bg-dun text-smokey-black">left and right arrows</span> move horizontally</p>
        </div>
        <div className="flex gap-2">
          <p><span className="p-1 font-bold rounded-md bg-dun text-smokey-black">down arrow</span> accelerates descent</p>
        </div>
        <div className="flex gap-2">
          <p><span className="p-1 font-bold rounded-md bg-dun text-smokey-black">spacebar</span> for fast drop</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:hidden">
        <div className="flex gap-2">
          <p><span className="p-1 font-bold rounded-md bg-dun text-smokey-black">Swipe left and right</span> to move horizontally</p> 
        </div>
        <div className="flex gap-2">
          <p><span className="p-1 font-bold rounded-md bg-dun text-smokey-black">swipe down</span> to accelerate descent.</p>
        </div>
        <div className="flex gap-2">
          <p><span className="p-1 font-bold rounded-md bg-dun text-smokey-black">Tap</span> to rotate</p> 
        </div>
      </div>
    </div>
  </div>
);

export default Menu;
