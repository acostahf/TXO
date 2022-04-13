import {
	Box,
	Flex,
	GridItem,
	Heading,
	SimpleGrid,
	Text,
} from "@chakra-ui/layout";
import {
	Input,
	InputGroup,
	InputRightAddon,
	Textarea,
	Button,
	ButtonGroup,
	Alert,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Join = () => {
	// States for contact form fields
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	//   Form validation stateds
	const [errors, setErrors] = useState({});

	//   Setting button text on form submission
	const [buttonText, setButtonText] = useState("Send");

	// Setting success or failure messages states
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showFailureMessage, setShowFailureMessage] = useState(false);

	// Validation check method
	const handleValidation = () => {
		let tempErrors = {};
		let isValid = true;

		if (name.length <= 0) {
			tempErrors["name"] = true;
			isValid = false;
		}

		if (email.length <= 0) {
			tempErrors["email"] = true;
			isValid = false;
		}
		if (message.length <= 0) {
			tempErrors["message"] = true;
			isValid = false;
		}

		setErrors({ ...tempErrors });
		console.log("errors", errors);
		return isValid;
	};

	//   Handling form submit

	const handleSubmit = async (e) => {
		e.preventDefault();

		let isValidForm = handleValidation();

		if (isValidForm) {
			setButtonText("Sending");
			const res = await fetch("/api/footerForm", {
				body: JSON.stringify({
					email: email,
					name: name,
					message: message,
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
		console.log(name, email, message);
	};

	return (
		<Box display={{ base: "none", sm: "block" }}>
			<SimpleGrid
				minH={"40vh"}
				columns={{ base: 1, sm: 1, md: 3 }}
				bg="brand.200"
				color="brand.200"
				bgImage={"url('/mid-pattern.svg')"}
				bgPosition="center"
				bgSize="cover"
				bgRepeat="no-repeat"
			>
				<GridItem
					bg="gray.300"
					colSpan={2}
					p="10"
					backgroundImage="url('/staircase-to-worker.jpg')"
					backgroundPosition="left"
					backgroundRepeat="no-repeat"
					backgroundSize="cover"
				>
					{/* <Image src="/staircase-to-worker.jpg" alt="staircase" layout="fill" /> */}
					<Flex height={"full"}>
						<Flex
							maxW="sm"
							zIndex="2"
							justifyContent="center"
							flexDirection="column"
						>
							<Heading className="element" as="h1" size="lg">
								JOIN OUR TEAM
							</Heading>
							<Text className="element" fontSize="sm" maxW={"xs"}>
								Looking at safety roles? Join our roster and be paired with a
								jobsite across the country with competitive pay. The TXO way!
							</Text>
						</Flex>
					</Flex>
				</GridItem>

				<GridItem>
					<Flex
						justify="center"
						// align="center"
						flexDirection="column"
						p="10"
						w={"full"}
						h={"full"}

						// height="lg"
					>
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
							<InputGroup
								className="element"
								flexDirection="column"
								gap="4"
								w={"full"}
								h={"full"}
							>
								<Input
									borderRadius="3xl"
									borderColor="brand.200"
									fontSize={"md"}
									bg="brand.300"
									placeholder="First and Last Name"
									type="text"
									value={name}
									name="name"
									onChange={(e) => {
										// setSubject(e.target.value);
										setName(e.target.value);
									}}
								/>
								{errors?.name && <Text> Name cannot be empty.</Text>}
								<Input
									borderRadius="3xl"
									borderColor="brand.200"
									fontSize={"md"}
									bg="brand.300"
									placeholder="Email Address"
									type="email"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
								{errors?.email && <Text> Email cannot be empty.</Text>}
								<Textarea
									borderRadius="md"
									borderColor="brand.200"
									fontSize={"md"}
									h={"32"}
									bg="brand.300"
									placeholder="Brief Message"
									size="lg"
									type="text"
									value={message}
									onChange={(e) => {
										setMessage(e.target.value);
									}}
								/>
								{errors?.message && <Text> Message cannot be empty.</Text>}
								<ButtonGroup>
									<Button
										type="submit"
										rounded="full"
										px="6"
										bgColor="brand.400"
										_hover={{ bg: "brand.100" }}
										color="white"
										variant="solid"
										fontFamily={"heading"}
										fontSize={"x-small"}
									>
										GET IN TOUCH
									</Button>
								</ButtonGroup>
							</InputGroup>
						</form>
					</Flex>
				</GridItem>
			</SimpleGrid>
		</Box>
	);
};

export default Join;
