import {
	Alert,
	Box,
	Flex,
	FormControl,
	FormLabel,
	Input,
	RadioGroup,
	HStack,
	Radio,
	Textarea,
	Button,
	ButtonGroup,
	FormErrorMessage,
} from "@chakra-ui/react";
import React, { useState } from "react";
export const ContactForm = () => {
	// States for contact form fields
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [company, setCompany] = useState("");
	const [number, setNumber] = useState("");
	const [service, setService] = useState("");
	const [reference, setReference] = useState("");
	const [email, setEmail] = useState("");
	const [quote, setQuote] = useState("");
	const [info, setInfo] = useState("");
	// const [subject, setSubject] = useState("");
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

		if (quote.length <= 0) {
			tempErrors["quote"] = true;
			isValid = false;
		}
		if (info.length <= 0) {
			tempErrors["info"] = true;
			isValid = false;
		}
		if (firstname.length <= 0) {
			tempErrors["firstname"] = true;
			isValid = false;
		}
		if (lastname.length <= 0) {
			tempErrors["lastname"] = true;
			isValid = false;
		}
		if (company.length <= 0) {
			tempErrors["company"] = true;
			isValid = false;
		}
		if (number.length <= 0) {
			tempErrors["number"] = true;
			isValid = false;
		}
		if (service.length <= 0) {
			tempErrors["service"] = true;
			isValid = false;
		}
		if (reference.length <= 0) {
			tempErrors["reference"] = true;
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
			const res = await fetch("/api/sendgrid", {
				body: JSON.stringify({
					quote: quote,
					info: info,
					email: email,
					fullname: fullname,
					lastname: lastname,
					company: company,
					number: number,
					service: service,
					reference: reference,
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
		console.log(
			firstname,
			lastname,
			email,
			company,
			number,
			service,
			reference,
			message,
			quote,
			info
		);
	};

	return (
		<div>
			<Flex
				bgColor="brand.200"
				bgImage={"url('/header.svg')"}
				bgPosition="center"
				bgSize="cover"
				bgRepeat="no-repeat"
				maxW={"6xl"}
			>
				<Flex p={{ base: "5", sm: "10" }} bg={"brand.300"}>
					<form onSubmit={handleSubmit}>
						<FormControl>
							<Flex direction={"column"} gap={"5"}>
								<FormLabel
									htmlFor="email"
									fontWeight="bold"
									fontFamily={"heading"}
									fontSize="xl"
									color="brand.400"
									textAlign={{ base: "center", sm: "start" }}
								>
									How May We Help You?
								</FormLabel>
								<RadioGroup defaultValue="Itachi" color="brand.300">
									<HStack spacing="24px" color={"brand.400"}>
										<Radio
											borderColor="brand.200"
											value="Quote"
											onChange={(e) => {
												setQuote(e.target.value);
											}}
										>
											Quote
										</Radio>
										<Radio
											borderColor="brand.200"
											value="Additional Information"
											onChange={(e) => {
												setQuote(e.target.value);
											}}
										>
											Additional Information
										</Radio>
									</HStack>
								</RadioGroup>
								<Flex gap={"2"} direction={{ base: "column", md: "row" }}>
									<Input
										type="text"
										value={firstname}
										name="firstname"
										onChange={(e) => {
											// setSubject(e.target.value);
											setFirstname(e.target.value);
										}}
										borderRadius={"full"}
										borderColor="brand.200"
										borderWidth={"2px"}
										id="first"
										placeholder="Frist Name"
										color={"brand.200"}
									/>
									{errors?.message && (
										<FormErrorMessage>Input cannot be empty.</FormErrorMessage>
									)}
									<Input
										type="text"
										value={lastname}
										onChange={(e) => {
											// setSubject(e.target.value);
											setLastname(e.target.value);
										}}
										color={"brand.200"}
										borderRadius={"full"}
										borderColor="brand.200"
										borderWidth={"2px"}
										id="last"
										placeholder="Last Name"
									/>
									{errors?.message && (
										<FormErrorMessage>Input cannot be empty.</FormErrorMessage>
									)}
								</Flex>
								<Flex gap={"2"} direction={{ base: "column", md: "row" }}>
									<Input
										type="text"
										value={company}
										onChange={(e) => {
											// setSubject(e.target.value);
											setCompany(e.target.value);
										}}
										color={"brand.200"}
										borderRadius={"full"}
										borderColor="brand.200"
										borderWidth={"2px"}
										id="company"
										placeholder="Company Name"
									/>
									{errors?.message && (
										<FormErrorMessage>Input cannot be empty.</FormErrorMessage>
									)}
									<Input
										type="text"
										value={number}
										onChange={(e) => {
											// setSubject(e.target.value);
											setNumber(e.target.value);
										}}
										color={"brand.200"}
										borderRadius={"full"}
										borderColor="brand.200"
										borderWidth={"2px"}
										id="number"
										placeholder="Phone Number"
									/>
									{errors?.message && (
										<FormErrorMessage>Input cannot be empty.</FormErrorMessage>
									)}
								</Flex>
								<Input
									type="email"
									value={email}
									onChange={(e) => {
										// setSubject(e.target.value);
										setEmail(e.target.value);
									}}
									color={"brand.200"}
									borderRadius={"full"}
									borderColor="brand.200"
									borderWidth={"2px"}
									id="email"
									placeholder="Email Address"
								/>
								{errors?.message && (
									<FormErrorMessage>Input cannot be empty.</FormErrorMessage>
								)}
								<Flex gap={"2"} direction={{ base: "column", md: "row" }}>
									<Input
										type="text"
										value={service}
										onChange={(e) => {
											// setSubject(e.target.value);
											setService(e.target.value);
										}}
										color={"brand.200"}
										borderRadius={"full"}
										borderColor="brand.200"
										borderWidth={"2px"}
										id="service"
										placeholder="Service Requesting"
									/>
									{errors?.message && (
										<FormErrorMessage>Input cannot be empty.</FormErrorMessage>
									)}
									<Input
										type="text"
										value={reference}
										onChange={(e) => {
											// setSubject(e.target.value);
											setReference(e.target.value);
										}}
										color={"brand.200"}
										borderRadius={"full"}
										borderColor="brand.200"
										borderWidth={"2px"}
										id="reference"
										placeholder="How did you find us"
									/>
									{errors?.message && (
										<FormErrorMessage>Input cannot be empty.</FormErrorMessage>
									)}
								</Flex>
								<Textarea
									type="text"
									value={message}
									onChange={(e) => {
										setMessage(e.target.value);
									}}
									color={"brand.200"}
									borderRadius={"xl"}
									borderColor="brand.200"
									borderWidth={"2px"}
									id="message"
									placeholder="message"
									size="sm"
								/>
								{errors?.message && (
									<FormErrorMessage>Input cannot be empty.</FormErrorMessage>
								)}
								<ButtonGroup>
									<Button
										type="submit"
										rounded="full"
										px="6"
										bgColor="brand.200"
										_hover={{ bg: "brand.100" }}
										color="white"
										variant="solid"
										fontFamily={"heading"}
										fontSize={"x-small"}
									>
										GET IN TOUCH
									</Button>
								</ButtonGroup>
							</Flex>
						</FormControl>
					</form>
					<div className="text-left pl-3">
						{showSuccessMessage && (
							<Alert status="success">
								Thankyou! Your Message has been delivered.{" "}
							</Alert>
						)}
						{showFailureMessage && (
							<Alert status="error">
								Oops! Something went wrong, please try again.{" "}
							</Alert>
						)}
					</div>
				</Flex>
			</Flex>
		</div>
	);
};
