import './App.css';
import Container from "./layout/Container";
import Sidebar from "./layout/Sidebar";
import Content from "./layout/Content";
import Widgets from "./layout/Widgets";

function App() {
  return (
      <Container>
          <Sidebar />
          <Content />
          <Widgets />
      </Container>
  );
}

export default App;
