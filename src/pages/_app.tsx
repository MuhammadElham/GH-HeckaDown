import "../styles/style.css"; // Global styles
import "../styles/shop.css"; // Shop-specific styles
import "../styles/product.css"; // Product-specific styles

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
