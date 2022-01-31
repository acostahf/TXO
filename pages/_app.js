import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";
import PageTransitions from "../components/PageTransitions";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ChakraProvider>
      <PageTransitions route={router.asPath}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PageTransitions>
    </ChakraProvider>
  );
}

export default MyApp;
