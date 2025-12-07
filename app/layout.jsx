import { Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Navabar from './../components/Navbar';

const roboto = Roboto({
  subsets: ['latin'],
  variable: "--font-google-roboto"
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-google-open-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${openSans.variable} ${openSans.className}`}>
        <Navabar />
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: {
    default: "Company Name",
    template: "%s | Company Name"
  },
};
