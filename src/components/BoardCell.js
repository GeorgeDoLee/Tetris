
const BoardCell = ({ cell }) => {
  const className = cell.className.split(' ');
  const splitClassName = className[1] ? `border-2 border-${className[0]}` : className[0]? `bg-${className[0]}` : '';
  
  return (  
      <div className={`${splitClassName} w-full h-full rounded-md`}>
        <div className="bg-tetromino__i"></div>
        <div className="bg-tetromino__j"></div>
        <div className="bg-tetromino__l"></div>
        <div className="bg-tetromino__s"></div>
        <div className="bg-tetromino__t"></div>
        <div className="bg-tetromino__o"></div>
        <div className="bg-tetromino__z"></div> 
        <div className="border-tetromino__i"></div>
        <div className="border-tetromino__j"></div>
        <div className="border-tetromino__l"></div>
        <div className="border-tetromino__s"></div>
        <div className="border-tetromino__z"></div>
        <div className="border-tetromino__o"></div>
        <div className="border-tetromino__t"></div>
      </div>
  );
}

export default BoardCell;