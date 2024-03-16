"use client";

import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure
} from "@nextui-org/react";

const FormModal = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Button onPress={onOpen}>Começar</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								Iniciar Chat
							</ModalHeader>
							<ModalBody></ModalBody>
							<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Cancelar
								</Button>
								<Button color="success" onPress={onClose}>
									Iniciar
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default FormModal;
