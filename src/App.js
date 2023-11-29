import logo from './logo.svg';
import './App.css';
import { HomePage } from './page/home-page';
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { ROUTE_PATH } from './core/common/appRouter';
import DestinationPage from './page/destination';
import DestinationDetail from './page/destination/detail';
import ArticlePage from './page/article';
import AritcleDetail from './page/article/detail';
import FestivalPage from './page/festival';
import FestivalDetail from './page/festival/detail';
import SpecialtyPage from './page/specialty';
import SpecialtyDetail from './page/specialty/detail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path={ROUTE_PATH.HOME_PAGE} element={<HomePage />} />

          <Route path={ROUTE_PATH.DESTINATION} element={<DestinationPage />} />
          <Route path={ROUTE_PATH.VIEW_DESTINATION} element={<DestinationDetail />} />

          <Route path={ROUTE_PATH.ARTICLE} element={<ArticlePage />} />
          <Route path={ROUTE_PATH.VIEW_ARTICLE} element={<AritcleDetail />} />

          <Route path={ROUTE_PATH.FESTIVAL} element={<FestivalPage />} />
          <Route path={ROUTE_PATH.VIEW_FESTIVAL} element={<FestivalDetail />} />

          <Route path={ROUTE_PATH.SPECIALTY} element={<SpecialtyPage />} />
          <Route path={ROUTE_PATH.VIEW_SPECIALTY} element={<SpecialtyDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
