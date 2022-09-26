import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../styles/globals.css";
import "../styles/textEditor.css";

import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

import Layout from "../components/Layout";
import { ReactQueryDevtools } from "react-query/devtools";

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
