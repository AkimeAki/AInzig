/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import { getTitle, pathToTitle } from "@/libs/page";
import { Game } from "@/routes/Game";
import { Home } from "@/routes/Home";
import { NotFound } from "@/routes/NotFound";
import { useEffect } from "react";
import { useLocation, BrowserRouter, Route, Routes } from "react-router-dom";

interface Props {
	element: JSX.Element;
}

const RouteProvider = ({ element }: Props): JSX.Element => {
	const location = useLocation();

	useEffect(() => {
		// document.body.scrollTo(0, 0);
		document.title = getTitle(pathToTitle(location.pathname));
	}, [location]);

	return element;
};

export const Main = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RouteProvider element={<Home />} />} />
				<Route path="/game" element={<RouteProvider element={<Game />} />} />
				<Route path="*" element={<RouteProvider element={<NotFound />} />} />
			</Routes>
		</BrowserRouter>
	);
};
