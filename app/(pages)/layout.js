import Navbar from "../components/navbar";
import "../globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body
        className="flex flex-col min-h-screen"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}