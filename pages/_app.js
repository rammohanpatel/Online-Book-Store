import React from 'react';
import {Toaster} from 'react-hot-toast'

import "./styles/globals.css";
import Layout from '../Components/Layout'
import { StateContext } from '../context/StateContext';
import {GoogleOAuthProvider} from '@react-oauth/google';

function MyApp({ Component, pageProps }) {
  return(
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
    <StateContext>
  <Layout>
    <Toaster/>
    <Component {...pageProps} />;
  </Layout>
  </StateContext>
  </GoogleOAuthProvider>
  )
}
export default MyApp;
