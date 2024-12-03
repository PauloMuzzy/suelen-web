import { ChakraProvider } from "@chakra-ui/react";
import { Roboto } from "@next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import StyledComponentsRegistry from "../../lib/registry";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <ChakraProvider>{children}</ChakraProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
