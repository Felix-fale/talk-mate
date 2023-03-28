import Chat from "../components/Chat";
import SideBar from "../components/SideBar";

function Home(props) {
  return (
    <div className="home">
      <div className="container">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
