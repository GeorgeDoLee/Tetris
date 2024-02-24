import React from "react";
import Preview from "./Preview";

const Previews = ({tetraminoes}) => {
    const previewTetraminoes = tetraminoes.slice(1 - tetraminoes.length).reverse();
    return (  
        <>
            {previewTetraminoes.map((tetramino, index) => (
                <Preview tetramino={tetramino} index={index} key={index} />
            ))}
        </>
    );
}
 
export default React.memo(Previews);