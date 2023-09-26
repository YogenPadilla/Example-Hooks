import { useState } from "react";

import Button from "@/components/Button";


const Contador = () => {
    
    const [resultado, setResultado] = useState(0);

    const [incBtnDisabled, setIncBtnDisabled] = useState(false);
    const [disBtnDisabled, setDisBtnDisabled] = useState(false);
    const [borde, setBorde] = useState("#0000ff")
  
    const [title, setTitle] = useState("Contador");
  
    const incrementar = () => {
      setResultado(resultado + 1);
      if (resultado >= 0) {
        setDisBtnDisabled(false);
      }
    };
  
    const disminuir = () => {
      if (resultado > 0) {
        setResultado(resultado - 1);
      } else {
        setDisBtnDisabled(true);
      }
    };
  
    const randontitle = () => {
      const title = ["Hello World", "Next.js", "Node.js", "React", "Tailwinds"];
      const index = Math.floor(Math.random() * title.length);
      setTitle(title[index]);
    };
  
    const randonbordercolor = () => {
      const bordercolor = ["#ff0000", "#ffff00", "#ffffff", "#00ff00", "#00ffff", "#0000ff", "#ff00ff",];
      const index = Math.floor(Math.random() * bordercolor.length);
      setBorde(bordercolor[index]);
    };
  
    return (
        <div className="flex flex-col items-center justify-center px-[16px] gap-[24px] rounded-lg bg-gray-300 ">
            <h1 className="text-[48px] font-bold "> {title} </h1>
          <div className="w-full flex items-center justify-center p-[16px] ">
           <div className="text-[24px] px-[16px] border " style={{borderColor: borde , color: borde}}>
           <p> {resultado} </p>
           </div>
          </div>
          <div className="w-full flex items-center justify-between p-[16px] gap-[16px] ">
            <Button
              disabled={disBtnDisabled}
              onClick={() => {
                disminuir();
                randontitle();
                randonbordercolor();
              }}
              label="Disminuye"
            />
            <Button
              disabled={incBtnDisabled}
              onClick={() => {
                incrementar(), 
                randontitle();
                randonbordercolor();
              }}
              label="Incrementa"
            />
          </div>
        </div>
    )
}

export default Contador;