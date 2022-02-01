import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";
import PageTransitions from "../components/PageTransitions";
import { useRouter } from "next/router";
// import GlobalStyle from "../styles/global-styles";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ChakraProvider>
      <PageTransitions route={router.asPath}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PageTransitions>
      {/* <GlobalStyle />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </ChakraProvider>
  );
}

export default MyApp;
