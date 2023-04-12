import { PropsWithChildren } from "react";

interface CarouselItemProps{
    width?: string
}

const CarouselItem = (props: PropsWithChildren<CarouselItemProps>) => {
    return(
        <div className="carousel-item" style={{
            width: props.width
        }}>
            {props.children}
        </div>
    )
};

export default CarouselItem;