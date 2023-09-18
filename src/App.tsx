import {
  Layout,
  Body,
  Header,
  Footer,
  MainWeather,
  ListDays,
} from 'components/index';
import './App.css';

function App() {
  return (
    <Layout>
      <Header>
        <MainWeather />
      </Header>
      <Body>
        <ListDays />
      </Body>
      <Footer />
    </Layout>
  );
}

export default App;
