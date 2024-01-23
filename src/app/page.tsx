import Image from "next/image";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-5xl text-white font-bold mb-8 animate-pulse">
        Coming Soon
      </h1>
      <p className="text-white text-lg mb-8">
        I am working hard to bring you something amazing. Stay tuned!
      </p>
      <p className="text-red-600 text-lg mb-6 animate-pulse">
        If you have a warm heart, please buy me a instant noodle...
      </p>
      <Image src="/qr.JPG" width={300} height={300} alt="bank qr" />
      <Footer />
    </div>
  );
}
