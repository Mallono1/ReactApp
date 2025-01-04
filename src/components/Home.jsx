

const Navbar = () => <div>Navbar</div>;
const Sidebar = () => <div>Sidebar</div>;
const Footer = () => <div>Footer</div>;

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
