
const BoardCell = ({ cell }) => {
  return (  
      <div className={`bg-${cell.className} w-full h-full rounded-md`}>
          <div className="bg-tetromino__i"></div>
          <div className="bg-tetromino__j"></div>
          <div className="bg-tetromino__l"></div>
          <div className="bg-tetromino__s"></div>
          <div className="bg-tetromino__t"></div>
          <div className="bg-tetromino__o"></div>
          <div className="bg-tetromino__z"></div>
      </div>
  );
}

export default BoardCell;