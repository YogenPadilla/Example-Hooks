import { useState } from "react";
import Button from "../Button";

const Carousel = ( { images } ) => {

    const [index, setIndex] = useState(0);

    const handleNext = () => {
        if(index < images.length - 1) {
            setIndex(index + 1);
        };
    };

    const handlePrev = () => {
        if(index > 0) {
            setIndex(index - 1);
        };
    };

    return ( 
        <div className="flex flex-col items-center justify-center bg-gray-300 gap-[16px] p-[24px] rounded-lg mt-[16px]">
            <h1  className="text-[48px] font-bold "> Carousel </h1>
            <img src={images[index]} alt="" />
            <div className="w-full flex items-center justify-between p-[16px] gap-[16px]">
                <Button onClick={() => {handlePrev();}} label="Anterior"/>
                <Button onClick={() => {handleNext();}} label="Siguiente" />
            </div>
        </div>
    )
}

export default Carousel;