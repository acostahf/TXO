import Image from "next/image";
import {
	Box,
	Flex,
	GridItem,
	Heading,
	SimpleGrid,
	Text,
	Stack,
} from "@chakra-ui/layout";
import { Alert } from "@chakra-ui/react";
import { Button, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import React, { useState } from "react";

export const Hero = () => {
	const [email, setEmail] = useState("");
	const [errors, setErrors] = useState({});
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showFailureMessage, setShowFailureMessage] = useState(false);
	const [buttonText, setButtonText] = useState("Send");

	const handleValidation = () => {
		let tempErrors = {};
		let isValid = true;

		if (email.length <= 0) {
			tempErrors["email"] = true;
			isValid = false;
		}

		setErrors({ ...tempErrors });
		console.log("errors", errors);
		return isValid;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		let isValidForm = handleValidation();

		if (isValidForm) {
			setButtonText("Sending");
			const res = await fetch("/api/email", {
				body: JSON.stringify({
					email: email,
				}),
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			});

			const { error } = await res.json();
			if (error) {
				console.log(error);
				setShowSuccessMessage(false);
				setShowFailureMessage(true);
				setButtonText("Send");
				return;
			}
			setShowSuccessMessage(true);
			setShowFailureMessage(false);
			setButtonText("Send");
		}
		console.log(email);
	};

	return (
		<Box>
			<SimpleGrid
				minH="80vh"
				columns={{ base: 1, sm: 1, md: 2 }}
				bg="brand.200"
				bgImage={"url('/header.png')"}
				bgPosition="center"
				bgSize="cover"
				bgRepeat="no-repeat"
				color="brand.300"
			>
				<Flex justify="center" align="center" flexDirection="column" p="10">
					<Stack spacing={10}>
						<Box>
							<Heading
								className="element"
								// fontWeight="semibold"
								fontSize="xl"
								fontFamily={"body"}
							>
								No Matter Who You Are.
							</Heading>
							<Heading className="element" as="h1" size="4xl">
								Safety <br /> Made Easy.
							</Heading>
						</Box>
						<form onSubmit={handleSubmit}>
							<div className="text-left pl-3">
								{showSuccessMessage && (
									<Alert status="success" color={"black"}>
										Thankyou! Your Message has been delivered.{" "}
									</Alert>
								)}
								{showFailureMessage && (
									<Alert status="error" color={"black"}>
										Oops! Something went wrong, please try again.{" "}
									</Alert>
								)}
							</div>
							<InputGroup className="element" maxW={"xl"}>
								<Input
									borderLeftRadius="3xl"
									borderColor="brand.200"
									bg="brand.300"
									color={"brand.200"}
									placeholder="EMAIL ADDRESS"
									fontFamily={"heading"}
									fontSize={"x-small"}
									type="email"
									value={email}
									onChange={(e) => {
										// setSubject(e.target.value);
										setEmail(e.target.value);
									}}
								/>
								<InputRightAddon
									borderRightRadius="3xl"
									borderColor="brand.200"
									fontFamily={"heading"}
									fontSize={"sm"}
									bg="brand.400"
								>
									<button type="submit">GET IN TOUCH</button>
								</InputRightAddon>
							</InputGroup>
						</form>
					</Stack>
				</Flex>
				<GridItem
					h={{ base: "0", sm: "0", md: "auto" }}
					bg="gray.300"
					position="relative"
					bgImage="url('/header.jpg') "
					bgPosition="center"
					bgSize="cover"
					bgRepeat="no-repeat"
				>
					{/* <Image src="/header.jpg" alt="header imager" layout="fill" priority /> */}
				</GridItem>
			</SimpleGrid>
		</Box>
	);
};

export default Hero;
