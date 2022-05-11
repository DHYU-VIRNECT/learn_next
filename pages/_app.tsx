import React, { Suspense } from "react";
import "../styles/index.scss";
import { AppProps } from "next/app";
import Loader from "../components/atoms/Loader/Loader";
import ErrorBoundary from "../components/wrappers/ErrorBoundary";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/wrappers/Layout";
import { reduxWrapper } from "../store";
import ErrorFallback from "../components/atoms/ErrorFallback/ErrorFallback";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            suspense: true,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<Loader />}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Suspense>
        </ErrorBoundary>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default reduxWrapper.withRedux(App);
