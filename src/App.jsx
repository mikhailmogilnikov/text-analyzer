import ProjectRoutes from './Routes.jsx';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import UseToTop from './hooks/useToTop';
import './styles/main.scss';

function App() {
  return (
    <div className="main-wrapper">
      <UseToTop />

      <Header />
      <ProjectRoutes />
      <Footer />
    </div>
  );
}

export default App;
