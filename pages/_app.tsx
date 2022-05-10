import React, { Suspense } from "react";
import "../styles/index.scss";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import Loader from "../components/atoms/Loader/Loader";
import ErrorBoundary from "../components/wrappers/ErrorBoundary";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/wrappers/Layout";
import { Provider } from "react-redux";
import store from "../store";

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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ErrorBoundary fallback={<div>something went wrong</div>}>
            <Suspense fallback={<Loader />}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Suspense>
          </ErrorBoundary>
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
