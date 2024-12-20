import "./globals.css";
import {Lexend_Deca, League_Spartan, Almarai, Poppins} from "next/font/google"

const lexend_deca_init = Lexend_Deca({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lexend-deca',
});

const poppins_init = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-poppins',
});

const league_spartan_init = League_Spartan({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-league-spartan',
});

const almarai_init = Almarai({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-almarai',
});

export const metadata = {
  title: "SandalwoodAI",
  description: "An AI-powered platform for processing and understanding Kannada audio resources on sandalwood cultivation, enabling users to query and explore indigenous knowledge through speech recognition.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${almarai_init.variable} ${league_spartan_init.variable} ${lexend_deca_init.variable} ${poppins_init.variable}`}>
        {children}
      </body>
    </html>
  );
}
