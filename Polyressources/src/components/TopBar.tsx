import "../styles/TopBar.css";

function TopBar() {
  return (
    <div className="TopBar">
      <a href="/pages/Home.tsx">Home</a>
      <a href="/pages/About.tsx">About</a>
      <a href="/pages/Contact.tsx">Contact</a>
    </div>
  );
}

export default TopBar;
