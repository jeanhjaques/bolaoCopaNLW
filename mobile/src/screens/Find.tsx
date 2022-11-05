import { Heading, VStack, Text } from "native-base";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import Logo from "../assets/logo.svg";

import React from "react";


export function Find(){
    return(
        <VStack flex={1} bgColor="gray.900">
            <Header title="Buscar por código" showBackButton/>

            <VStack mt={8} mx={5} alignItems="center">
                <Logo/>
                <Heading fontFamily="heading" color="white" mb={8} fontSize="xl" textAlign="center">
                    Encontrar o bolão através de {"\n"} seu código único
                </Heading>

                <Input mb={2} placeholder="Qual o código do bolão?"/>

                <Button title="BUSCAR BOLÃO"/>
            </VStack>
        </VStack>
    )
}