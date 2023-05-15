import { Box, BoxProps, Input, Text } from "@chakra-ui/react";
import { fontFamily } from "../../style/font";
import { ChangeEvent } from "react";

interface InputSintaProps{
    description: string,
    placeholder: string,
    notes: string,
    value?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    width: string,
    type: React.HTMLInputTypeAttribute,
    isDisable?: boolean,
    additionalProps?: BoxProps,
    optional?: boolean
}

const InputSinta = ({description, notes, onChange, placeholder, value, width, type, isDisable, additionalProps, optional}: InputSintaProps) => {
    if(isDisable){
        return (
            <Box
                    width={{
                        "lg" : "100%"
                    }}
                    marginTop={{
                        "lg" : "1rem"
                    }}
                    marginBottom={{
                        "lg" : "1rem"
                    }}
                    {...additionalProps}>
                        <Text
                        fontFamily={fontFamily}
                        fontWeight={500}
                        fontSize="1rem"
                        marginY={{
                            "lg" : "0.5rem"
                        }}
                        color="#89939E">
                            {description}
                        </Text>
                        <Input 
                        isDisabled
                        placeholder={placeholder}
                        _placeholder={{
                            "color" : "#717171"
                        }}
                        width={{
                            "lg" : width
                        }}
                        marginBottom={{
                            "lg" : "0.5rem"
                        }}
                        value={value}
                        onChange={onChange}
                        type={type}/>
                        <Text
                        fontFamily={fontFamily}
                        fontWeight={400}
                        fontSize="0.75rem"
                        color="#89939E">{notes}</Text>
                </Box>
        );
    }
    return (
        <Box
                width={{
                    "lg" : "100%"
                }}
                marginTop={{
                    "lg" : "1rem"
                }}
                marginBottom={{
                    "lg" : "1rem"
                }}
                {...additionalProps}>
                    {
                        optional == true ?
                        <Text
                        fontFamily={fontFamily}
                        fontWeight={500}
                        fontSize="1rem"
                        marginY={{
                            "lg" : "0.5rem"
                        }}>
                        {description}(optional)
                        </Text>
                    :
                        <Text
                        fontFamily={fontFamily}
                        fontWeight={500}
                        fontSize="1rem"
                        marginY={{
                            "lg" : "0.5rem"
                        }}>
                            {description}<span style={{
                            "color" : "#E12C1F"
                        }}>*</span></Text>
                    }
                    <Input 
                    placeholder={placeholder}
                    _placeholder={{
                        "color" : "#717171"
                    }}
                    width={{
                        "lg" : width
                    }}
                    marginBottom={{
                        "lg" : "0.5rem"
                    }}
                    value={value}
                    onChange={onChange}
                    type={type}/>
                    <Text
                    fontFamily={fontFamily}
                    fontWeight={400}
                    fontSize="0.75rem"
                    color="#89939E">{notes}</Text>
            </Box>
    );
}

export default InputSinta;