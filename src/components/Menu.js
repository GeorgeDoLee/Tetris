

const Menu = ({onClick}) => {
    return (  
        <div>
            <button 
                onClick={onClick}
                className="bg-dun text-anti-flash py-4 px-20 text-2xl font-bold text-center rounded-md shadow-md hover:opacity-80 active:scale-95 duration-300"
            >Play Tetris</button>
        </div>
    );
}
 
export default Menu;