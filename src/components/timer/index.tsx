import { Flex, Text, useToast } from "@chakra-ui/react";
import { fontFamily } from "../../style/font";
import { useEffect, useState } from "react";
import { User } from "../../response/response";
import { useNavigate, useParams } from "react-router-dom";
import { AgenTravel } from "../../response/agen_travel";
import { getAgenTravel } from "../../util/auth_util";

const Timer = () => {
    const {paketWisataId} = useParams();
    const toast = useToast();
    const navigate = useNavigate();
    const [deadline, setDeadline] = useState<number>(-1);
    const [timeLeft, setTimeLeft] = useState<number>(-1);
    const user = JSON.parse(localStorage.getItem("user") as string) as User;
    let agenTravel: AgenTravel = getAgenTravel();
    useEffect(() => {
        if(user){
            if(localStorage.getItem(`deadline-${user.id}${paketWisataId}`)){
                setDeadline(Number(localStorage.getItem(`deadline-${user.id}${paketWisataId}`)));
            } else {
                const deadline = Date.now() + 1800000;
                setDeadline(deadline);
                localStorage.setItem(`deadline-${user.id}${paketWisataId}`, deadline + "");
            }
        } else {
            if(agenTravel){
                if(localStorage.getItem(`deadline-${agenTravel.id}`)){
                    setDeadline(Number(localStorage.getItem(`deadline-${agenTravel.id}`)));
                } else {
                    const deadline = Date.now() + 1800000;
                    setDeadline(deadline);
                    localStorage.setItem(`deadline-${agenTravel.id}`, deadline + "");
                }
            }
        }
    }, []);

    useEffect(() => {
        if(user){
            const deadline = Number(localStorage.getItem(`deadline-${user.id}${paketWisataId}`));
            const interval = setInterval(() => {
                const currentTime = Date.now();
                const time = Math.max(0, deadline - currentTime);
                setTimeLeft(time);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            const deadlineAgenTravel = Number(localStorage.getItem(`deadline-${agenTravel.id}`));
            const interval = setInterval(() => {
                const currentTime = Date.now();
                const time = Math.max(0, deadlineAgenTravel - currentTime);
                setTimeLeft(time);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        if(timeLeft == 0){
            if(user){
                localStorage.removeItem(`deadline-${user.id}${paketWisataId}`);
                toast({
                    duration: 2000,
                    description: "Redirecting to paket wisata page...",
                    isClosable: true,
                    title: "Waktu pemesanan habis",
                    status: "warning"
                });
                setTimeout(() => {
                    navigate(`/paketwisata/deskripsi/${paketWisataId}`);
                }, 3000);
            } else {
                localStorage.removeItem(`deadline-${agenTravel.id}`);
                toast({
                    duration: 2000,
                    description: "Redirecting to agen travel home page...",
                    isClosable: true,
                    title: "Waktu pemesanan habis",
                    status: "warning"
                });
                setTimeout(() => {
                    navigate(`/agentravel/home`);
                }, 3000);
            }
        }
    }, [timeLeft]);

    const menit = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
    const detik = Math.floor((timeLeft % (60 * 1000)) / 1000);
    return(
        <Flex backgroundColor="#0053AD" justifyContent={{"lg" : "center"}} position={{"lg" : "relative"}} top={{"lg" : "6rem"}}>
                <Flex gap={{"lg" : "2rem"}} justifyContent="center" marginY={{"lg" : "1rem"}}>
                    <Text
                    fontFamily={fontFamily}
                    color="white"
                    fontWeight={400}
                    fontSize={{"lg" : "1.125rem"}}>
                        Mohon selesaikan dalam
                    </Text>
                    <Text
                    fontFamily={fontFamily}
                    color="white"
                    fontWeight={400}
                    fontSize={{"lg" : "1.125rem"}}>
                        <span style={{"color" : "#FFB240", "fontWeight" : 600}}>00</span> : <span style={{"color" : "#FFB240", "fontWeight" : 600}}>{menit}</span>  : <span style={{"color" : "#FFB240", "fontWeight" : 600}}>{detik}</span> 
                    </Text>
                </Flex>
            </Flex>
    );
};

export default Timer;