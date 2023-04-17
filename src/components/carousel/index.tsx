import carousel1 from "../../images/carousel/carousel1.png";
import carousel2 from "../../images/carousel/carousel2.png";
import carousel3 from "../../images/carousel/carousel3.png";
import carousel4 from "../../images/carousel/carousel4.png";
import carousel5 from "../../images/carousel/carousel5.png";
import { Box, Flex, Image, Link, Slide } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import Circle from "../circle";

const Carousel = () => {

  const data = useMemo(() => [
      <Image
        src={carousel1}
        width={{
          "lg" : "80%"
        }}
        height={{
          "lg" : "100%"
        }}
        paddingTop={{
          "lg" : "8rem"
        }}
        paddingBottom={{
          "lg" : "3.5rem"
        }}
        marginLeft={{
          "lg" : "8rem"
        }}
        marginRight={{
          "lg" : "8rem"
        }}/>,
        <Image
          src={carousel2}
          width={{
            "lg" : "80%"
          }}
          paddingTop={{
            "lg" : "8rem"
          }}
          paddingBottom={{
            "lg" : "3.5rem"
          }}
          marginLeft={{
            "lg" : "8rem"
          }}
          marginRight={{
            "lg" : "8rem"
          }}/>,
     <Image
       src={carousel3}
       width={{
         "lg" : "80%"
       }}
       paddingTop={{
         "lg" : "8rem"
       }}
       paddingBottom={{
         "lg" : "3.5rem"
       }}
       marginLeft={{
         "lg" : "8rem"
       }}
       marginRight={{
         "lg" : "8rem"
       }}/>,
     <Image
       src={carousel4}
       width={{
         "lg" : "80%"
       }}
       paddingTop={{
         "lg" : "8rem"
       }}
       paddingBottom={{
         "lg" : "3.5rem"
       }}
       marginLeft={{
         "lg" : "8rem"
       }}
       marginRight={{
         "lg" : "8rem"
       }}/>,
     <Image
       src={carousel5}
       width={{
         "lg" : "80%"
       }}
       paddingTop={{
         "lg" : "8rem"
       }}
       paddingBottom={{
         "lg" : "3.5rem"
       }}
       marginLeft={{
         "lg" : "8rem"
       }}
       marginRight={{
         "lg" : "8rem"
       }}/>
  ], []);

  const [index, setIndex] = useState<number>(0);
  const updateCheck = (index: number) => {
    const object = {
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      check5: false
    };
    switch(index){
      case 0:
        object.check1 = true;
        object.check2 = false;
        object.check3 = false;
        object.check4 = false;
        object.check5 = false;
        break;
      case 1:
        object.check1 = false;
        object.check2 = true;
        object.check3 = false;
        object.check4 = false;
        object.check5 = false;
        break;
      case 2:
        object.check1 = false;
        object.check2 = false;
        object.check3 = true;
        object.check4 = false;
        object.check5 = false;
        break;
      case 3:
        object.check1 = false;
        object.check2 = false;
        object.check3 = false;
        object.check4 = true;
        object.check5 = false;
        break;
      case 4:
        object.check1 = false;
        object.check2 = false;
        object.check3 = false;
        object.check4 = false;
        object.check5 = true;
        break;
    }
    return object;
  };

  const check = useMemo(() => updateCheck(index), [index])
  useEffect(() => {
    const interval = setInterval(() => {
      if(index == data.length - 1){
        setIndex(0);
      } else {
        setIndex((i) => ++i);
      }
    }, 5000);
    return () => clearInterval(interval);
  });

  return(
    <>
      <Box>
        {data[index]}
        <Flex 
        gap={"4rem"}
        marginLeft={{
          "lg" : "30rem"
        }}
        marginRight={{
          "lg" : "30rem"
        }}
        marginBottom={{
          "lg" : "4rem"
        }}>
          <Link onClick={() => {
            setIndex(0);
          }}><Circle 
          color={check.check1? "#0053AD" : "grey"}/></Link>
          <Link
          onClick={() => {
            setIndex(1);
          }}><Circle
          color={check.check2? "#0053AD" : "grey"}/></Link>
          <Link
          onClick={() => {
            setIndex(2);
          }}><Circle
          color={check.check3? "#0053AD" : "grey"}/></Link>
          <Link
          onClick={() => {
            setIndex(3);
          }}><Circle
          color={check.check4? "#0053AD" : "grey"}/></Link>
          <Link
          onClick={() => {
            setIndex(4);
          }}><Circle 
          color={check.check5? "#0053AD" : "grey"}/></Link>
        </Flex>
      </Box>
    </>
  )  
  
};

export default Carousel;