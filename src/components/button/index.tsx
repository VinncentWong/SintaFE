import { Button, ButtonProps, Flex, FlexProps, Image, Text, TextProps } from "@chakra-ui/react";

interface ButtonWithImageProps{
    buttonProps: ButtonProps,
    image: string,
    textProps: TextProps,
    textContent: string,
    textPositionProps?: FlexProps
}

const ButtonWithImage = ({buttonProps, image, textProps, textContent, textPositionProps}: ButtonWithImageProps) => {
    return(
        <Flex>
            <Button {...buttonProps}>
                <Flex {...textPositionProps}>
                    <Image src={image} maxWidth="100%"/>
                    <Text {...textProps}>{textContent}</Text>
                </Flex>
            </Button>
        </Flex>
    )
};

export default ButtonWithImage;