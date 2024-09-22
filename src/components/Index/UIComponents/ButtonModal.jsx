

import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { FacturacionIcon } from "./Icons/FacturacionIcon";

export const ButtonModal = ({ solucion, text, classProps }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button isIconOnly onPress={onOpen} className="bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon h-20 w-20 text-dark icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
            </Button>
            <Modal isOpen={isOpen} size="2xl" placement="auto" onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            {/* <ModalHeader className="flex flex-col gap-1">{header}</ModalHeader> */}
                            <ModalBody className="m-0 p-0">
                                <section className={classProps}>
                                    <div className="bg-gray-700/50 rounded-b-3xl content-center h-full">
                                        <h1 className="text-4xl text-center text-white montserrat-bold">{solucion}</h1>

                                    </div>
                                </section>
                                <div className="py-7 grid grid-cols-8 mx-10">
                                    <div className="content-center col-span-8  md:col-span-2">
                                        <FacturacionIcon></FacturacionIcon>
                                    </div>
                                    <div className="col-span-8 my-5 md:my-0 md:col-span-6 content-center">
                                        <p className="text-lg montserrat-regular  text-center md:text-left">
                                            {text}
                                        </p>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="light" variant="danger" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
