// App.js
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import Footer from "./components/Footer";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<SearchSection />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
