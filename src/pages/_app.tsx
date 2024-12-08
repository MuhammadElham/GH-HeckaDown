// import "@/styles/style.css";  // Style-specific styles
// import "@/styles/shop.css";  // Shop-specific styles
import '../styles/style.css';
import '../styles/shop.css';
import '../styles/product.css';

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
