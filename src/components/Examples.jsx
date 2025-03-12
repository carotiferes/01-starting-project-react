import { useState } from "react";

import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import Tabs from "./Tabs.jsx";

export default function Examples() {
	const [selectedTopic, setSelectedTopic] = useState();

	//let tabContent = 'Please click a button'
	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
	}
	return (
		<section id="examples">
			<h2>Examples</h2>
			<Tabs
        buttonsContainer="menu"
				buttons={
					<>
						<TabButton
							isSelected={selectedTopic === "components"}
							onSelect={() => handleSelect("components")}
						>
							Components
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "jsx"}
							onSelect={() => handleSelect("jsx")}
						>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "props"}
							onSelect={() => handleSelect("props")}
						>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "state"}
							onSelect={() => handleSelect("state")}
						>
							State
						</TabButton>
					</>
				}
			>
				{
					/* CONTENT */
					!selectedTopic ? (
						<p>Please select a Topic</p>
					) : (
						<div id="tab-content">
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].description}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic].code}</code>
							</pre>
						</div>
					)
				}
			</Tabs>
		</section>
	);
}
