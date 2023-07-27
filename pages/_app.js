import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { NhostProvider, NhostClient } from '@nhost/nextjs';
import { NhostApolloProvider } from '@nhost/react-apollo'

const nhost = new NhostClient({
  subdomain: 'fxcxevlogciedlcftivw',
  region: 'eu-central-1'
});

export default function MyApp({ Component, pageProps }) {
  return (
    <NhostProvider nhost={nhost} initial={pageProps.nhostSession}>
    <NhostApolloProvider nhost={nhost}>
      <Component {...pageProps} />
      <Toaster />
    </NhostApolloProvider>
    </NhostProvider>
  );
}
