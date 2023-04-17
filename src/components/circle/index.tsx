import { Box } from "@chakra-ui/react";

interface CircleProps{
    color?: string
}

const Circle = ({color}: CircleProps) => {
    return(
        <Box
        borderRadius="50%"
        width={{
            "lg" : "2rem"
        }}
        height={{
            "lg" : "2rem"
        }}
        backgroundColor={color}/>
    )
};

export default Circle;