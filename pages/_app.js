import "../styles/globals.css";
import { QueryClientProvider, QueryClient, Hydrate } from "react-query";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
            duration: 0.5,
          },
          pageAnimate: {
            opacity: 1,
            duration: 0.5,
          },
          pageExit: {
            opacity: 0,
            duration: 0.5,
          },
        }}
      >
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Hydrate>
        </QueryClientProvider>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
