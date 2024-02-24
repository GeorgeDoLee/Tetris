

const BoardCell = ({ cell }) => {
    return (  
        <div className={`bg-${cell.className} w-full h-full rounded-md`}>
            <div className="bg-tetramino__o"></div>
            <div className="bg-tetramino__i"></div>
            <div className="bg-tetramino__j"></div>
            <div className="bg-tetramino__l"></div>
            <div className="bg-tetramino__s"></div>
            <div className="bg-tetramino__z"></div>
        </div>
    );
}
 
export default BoardCell;