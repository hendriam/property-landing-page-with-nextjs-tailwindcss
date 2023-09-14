import "./globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin-ext"], weight: "400" });

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={poppins.className}>
            <body>{children}</body>
        </html>
    );
}
