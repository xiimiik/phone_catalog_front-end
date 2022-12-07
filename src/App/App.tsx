import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { CatalogPage } from '../pages/CatalogPage';
import { Nav } from '../components/Nav';
import { FavoritesPage } from '../pages/FavoritesPage';
import { CartPage } from '../pages/CartPage';
import { ItemCardPage } from '../pages/ItemCardPage';
import { NotYet } from '../pages/NotYet';
import { Footer } from '../components/Footer';
import { NotFoundPage } from '../components/NotFoundPage';
import { UserContextProvider } from '../context/Context';

import s from './App.module.scss';

export function App() {
  return (
    <UserContextProvider>
      <div className={s.wrapper}>
        <Nav />

        <main className={s.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />

            <Route path="phones">
              <Route index element={<CatalogPage />} />
              <Route path=":phoneId" element={<ItemCardPage />} />
            </Route>

            <Route path="tablets">
              <Route index element={<NotYet />} />
            </Route>

            <Route path="accessories">
              <Route index element={<NotYet />} />
            </Route>

            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/cart" element={<CartPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </UserContextProvider>
  );
}
