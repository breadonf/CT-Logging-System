import "../styles/globals.css";
import { QueryClientProvider, QueryClient, Hydrate } from "react-query";
import Layout from "../components/Layout";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, router }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
