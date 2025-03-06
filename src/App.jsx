
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
import Section from "./components/Section.jsx";

function App() {
	return (
		<div>
			<Header />
			<main>
				<Section title="Core concepts" id="core-concepts"><CoreConcepts /></Section>
				
				<Examples />
			</main>
		</div>
	);
}

export default App;

/* function CoreConcept(props) {
	return (
		<li>
			<img src={props.image} alt={props.title} />
			<h3>{props.title}</h3>
			<p>{props.description}</p> 
		</li>
	);
} */
