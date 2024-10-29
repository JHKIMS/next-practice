import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata :Metadata= {
  title: {
    template: "%s | NEXT.JS",
    default: "ETC FRAMEWORK",
  },
  description: "The best framework is NEXT.JS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
