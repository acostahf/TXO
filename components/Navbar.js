import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box width={"100%"}>
      <Flex
        bg="brand.400"
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 5 }}
        px={{ base: 8 }}
        align={"center"}
        justify={{ base: "space-between", sm: "center" }}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          // ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          // flex={{ base: 1 }}
          paddingRight={{ md: 100 }}
          display={{ base: "block", sm: "flex" }}
          justify={{ base: "center", md: "start" }}
          w={"100"}
          h={"35"}
        >
          <NextLink href="/" passHref bg="brand.100">
            <Link
              className="box"
              textColor="white"
              fontWeight="bold"
              px={{ base: "0" }}
              py="1"
            >
              <Image
                src="/nav-logo.png"
                width="100"
                height="35"
                alt="TXO Logo"
              />
            </Link>
          </NextLink>
        </Flex>
        <Stack
          flex={{ base: 1, xs: 1 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
          <NextLink href="/contact" passHref>
            <Link
              className="box"
              textColor="white"
              fontSize={{ base: "xx-small", sm: "sm" }}
              display={{ base: "none", md: "block" }}
              bg="brand.200"
              _hover={{ bg: "brand.100" }}
              fontFamily={"heading"}
              rounded="full"
              px={{ base: "2", sm: "8" }}
              py={{ base: "2", sm: "2" }}
            >
              GET IN TOUCH
            </Link>
          </NextLink>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("brand.300");
  const linkHoverColor = useColorModeValue("brand.100", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={8} align="center">
      {NavItems.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <NextLink href={navItem.href ?? "#"} passHref>
                <Link
                  p={2}
                  fontSize={{ md: "x-small", lg: "sm" }}
                  fontWeight={"bold"}
                  color={linkColor}
                  fontFamily={"heading"}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Link>
              </NextLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NavItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NavItems = [
  {
    label: "SAFETY SERVICES",
    href: "/services",
  },
  {
    label: "WHO WE ARE",
    href: "/about",
  },
  {
    label: "CONTACT",
    href: "/contact",
  },
];
