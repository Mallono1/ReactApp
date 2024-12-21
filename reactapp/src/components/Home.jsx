// filepath: /C:/Users/gfurt/Desktop/ironhack/module2/reactapp/reactapp/src/components/Home.jsx


const Navbar = () => <div>Navbar</div>;
const Sidebar = () => <div>Sidebar</div>;
const Footer = () => (
  <div>
    <p>Footer</p>
    <a href="https://github.com/Mallono1/ReactApp" target="_blank" rel="noopener noreferrer">
      GitHub Repository
    </a>
  </div>
);

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <h2>Welcome to the Home Page!</h2>
          <p>This is the main content of the Home page.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;