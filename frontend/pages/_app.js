import "../app/globals.css";
import {Lexend_Deca, League_Spartan, Almarai} from "next/font/google"

const lexend_deca_init = Lexend_Deca({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lexend-deca',
});

const almarai_init = Almarai({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-almarai',
  });

const league_spartan_init = League_Spartan({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-league-spartan',
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${almarai_init.variable} ${league_spartan_init.variable} ${lexend_deca_init.variable}`}>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;