import { Button, ButtonProps, Flex, Image, Text, TextProps } from "@chakra-ui/react";

interface ButtonWithImageProps{
    buttonProps: ButtonProps,
    image: string,
    textProps: TextProps,
    textContent: string,
}

const ButtonWithImage = ({buttonProps, image, textProps, textContent}: ButtonWithImageProps) => {
    return(
        <Flex>
            <Button {...buttonProps}>
                <Flex>
                    <Image src={image} maxWidth="100%"/>
                    <Text {...textProps}>{textContent}</Text>
                </Flex>
            </Button>
        </Flex>
    )
};

export default ButtonWithImage;