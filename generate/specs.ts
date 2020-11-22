import axios from "axios";
import { JSDOM } from "jsdom";
import { Category } from "./Category";
import { Parameter } from "./Parameter";
import { Spec } from "./Spec";

async function getHTML(url: string) {
	const main = await axios.get(url);
	return main.data;
}

function getDocument(html: string) {
	const dom = new JSDOM(html);
	return dom.window.document;
}

async function getEndpoints() {
	const html = await getHTML("https://disqus.com/api/docs/");
	const document = getDocument(html);
	return [...(<any>document.querySelectorAll("#resources li > a"))].map((a) =>
		a.getAttribute("href")
	);
}

function addExample(document: Document, spec: Spec) {
	[...<any>document.querySelectorAll("pre")]
		.map((x) => x.textContent)
		.forEach((x) => spec.example.push(x));
}

function createParameter(li: Element, isOptional: boolean): Parameter {
	let span = li.querySelector("h5 span");
	if (span) {
		span.remove();
	}

	let description = li.querySelector("p:last-child");
	if (description) {
		[...(<any>description.querySelectorAll("br"))].forEach(
			(x) => (x.textContent = "\n")
		);
	}

	return new Parameter(
		li.querySelector("h5").textContent.trim(),
		description ? description.textContent : null,
		isOptional
	);
}

export async function getCategories(): Promise<Array<Category>> {
	const endpoints = await getEndpoints();
	const categories = new Array<Category>();

	for (const endpoint of endpoints) {
		//debug:
		//if(endpoint.indexOf("threads") == -1) continue;

		console.log(endpoint);

		let html = await getHTML(endpoint);
		let document = getDocument(html);

		const spec = new Spec(
			document.querySelector(".api-doc > p > a").textContent,
			document.querySelector(".docs p").textContent,
			html.indexOf("<p>POST</p>") != -1 ? "POST" : "GET"
		);

		addExample(document, spec);

		let cat = categories.find((x) => x.name == spec.category);
		if (!cat) {
			cat = new Category(spec.category);
			categories.push(cat);
		}

		cat.specs.push(spec);

		for (const li of [...(<any>document.querySelectorAll(".api-arg-list"))]) {
			const h4 = li.querySelector("h4");
			const isOptionalParameter = h4.textContent.toLowerCase() == "optional";

			for (let parameter of [...li.querySelectorAll("li")]) {
				spec.fields.push(createParameter(parameter, isOptionalParameter));
			}
		}
	}

	return categories;
}
