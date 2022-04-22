import { Resetcss } from '../styles/globals.js'


function MyApp({ Component, pageProps }) {
  return( 
  
    <>
    
    
    <Resetcss>


    <Component {...pageProps} />

    </Resetcss>

    
    </>
  )
  
}

export default MyApp
