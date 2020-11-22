import fs from "fs";
import { getCategories } from "./specs";

let i = 0;

(async () => {
	let categories = await getCategories();

	for (const category of categories) {
		let cls = await category.render();

		console.log(`Writing ${category.className}...`);
		fs.writeFileSync(`./packages/disqus-server-client/src/endpoints/${category.className}.ts`, cls);
	}

	console.log("Writing posts array");
	let posts = "export const actionRequiringPost = new Set([\n";
	for (const category of categories) {
		for (const spec of category.specs) {
			if (spec.method == "POST") {
				posts += "  '" + spec.action + "',\n";
			}
		}
	}
	posts += "]);\n";
	fs.writeFileSync("./packages/disqus-server-client-core/src/data/posts.ts", posts);

	console.log("Writing Disqus class...");
	const imports = categories
		.map(
			(x) => `import { ${x.className} } from './endpoints/${x.className}';`
		)
		.join("\n");

	const endpoints = categories
		.map((x) => `    ${x.name} = new ${x.className}(this);`)
		.join("\n");

	const d = `import { DisqusCore } from 'disqus-server-client-core';
${imports}

export class Disqus extends DisqusCore
{
${endpoints}
}
`;

	fs.writeFileSync("./packages/disqus-server-client/src/disqus.ts", d);
})();
