import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './utils/constants/constants';
import Main from './pages/mainPage/Main';
import NotFound from './pages/notFoundPage/NotFound';
import LoadingSpinner from './components/loadingSpinner/LoadingSpinner';

function App() {
	return (
		<>
			<Suspense fallback={<LoadingSpinner />}>
				<Routes>
					<Route path={ROUTES.MAIN} element={<Main />} />
					<Route path={ROUTES.NOTFOUND} element={<NotFound />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
