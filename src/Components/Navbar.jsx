import SearchBar from "./SearchBar";
import UploadButton from "./UploadButton";

function Navbar() {
  return (
    <header className="navbar">
      <h1>XHAUSA</h1>

      <SearchBar />

      <UploadButton />
    </header>
  );
}

export default Navbar;