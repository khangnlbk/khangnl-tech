export default function Footer() {
  return (
    <div>
      <footer>
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between sticky">
          <p className="text-white text-lg mb-8">Contact me: {" "}</p>
          &nbsp;
          <a href="mailto:khangnl@khangnl.tech" className="text-gray-500 text-lg mb-8">khangnl@khangnl.tech</a>
        </div>
      </footer>
    </div>
  );
}