import React from 'react';
import {Toaster} from 'react-hot-toast'

import "./styles/globals.css";
import Layout from '../Components/Layout'
import { StateContext } from '../context/StateContext';


function MyApp({ Component, pageProps }) {
  return(
    <StateContext>
  <Layout>
    <Toaster/>
    <Component {...pageProps} />;
  </Layout>
  </StateContext>
  )
}
export default MyApp;
