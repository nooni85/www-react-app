import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export default function Root () {
	const location = useLocation();

	useEffect(() => {
		console.log(location);

		if (location.pathname === "/") {
			window.location.href = "/dashboard";
		}

	}, [location]);

	return (
		<div>asdfasdf</div>
	);
}