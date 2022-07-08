import "../styles/globals.css";
import "../styles/textEditor.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { QueryClientProvider, QueryClient, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "../components/Layout";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, router }) {
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
