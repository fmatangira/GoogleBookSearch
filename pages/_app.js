// import App from 'next/app'
import '../public/css/app.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export default function MyApp({ Component, pageProps }) {
    return (
    <Component {...pageProps} />)
  }