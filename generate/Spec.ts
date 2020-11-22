import { capitalize } from "./utils";
import { Parameter } from "./Parameter";
import { parseCategoryName } from "./Category";
import { generateReturnInterfaces } from "./qt";

export class Spec {
	readonly fields = new Array<Parameter>();
	readonly name: string;
	readonly capitalizedName: string;
	readonly category: string;
	readonly capitalizedCategory: string;
	readonly interfaceName: string;
	readonly action: string;
	readonly example = new Array<string>();
	readonly returnInterfaceName: string;

	constructor(
		public url: string,
		public description: string,
		public method: string
	) {
		let name = url.replace("https://disqus.com/api/3.0/", "");
		name = name.replace(".json", "");

		let split = name.split("/");
		this.action = split.join("/");

		this.name = split[split.length - 1];
		this.capitalizedName = capitalize(this.name);
		this.category = parseCategoryName(
			split.reverse().splice(1).reverse().join("/")
		);
		this.capitalizedCategory = capitalize(this.category);
		this.interfaceName =
			"I" + this.capitalizedCategory + this.capitalizedName + "Parameters";

		this.returnInterfaceName =
			"I" + this.capitalizedCategory + this.capitalizedName;

		if (this.description.startsWith("https://")) {
			this.description = "This method has no descript in on the API.";
		}
	}

	getJsonExamples() {
		var examples = new Array<string>();

		for (const example of this.example) {
			try {
				JSON.parse(example);
				examples.push(example);
			} catch {}
		}

		return examples.length == 0 ? examples : [examples[0]];
	}

	renderMethod(className: string) {
		const empty = this.fields.length == 0;
		const parameters = empty ? "" : `parameters: ${this.interfaceName}`;
		const parameterValue = empty ? "" : ", parameters";
		const parameterDescription = empty
			? ""
			: `\n     * @param {${this.interfaceName}} parameters The parameters.`;

		const returnType =
			this.getJsonExamples().length == 0
				? "Promise<any>"
				: `Promise<${this.returnInterfaceName}>`;

		const description = `
    /**
     * ${this.description.replace(/\n/g, "\n     * ")}
     * ${parameterDescription}
     * @returns The response as a promise.
     * @memberOf {${returnType}} ${className}
     */`;

		return `
        ${description}
        ${this.name}(${parameters}): ${returnType}{
			return this.client.request("${this.action}"${parameterValue});
        }
    `;
	}

	async renderReturnInterface() {
		let samples = this.getJsonExamples();
		if (samples.length == 0) return "";

		let str = await generateReturnInterfaces(
			this.returnInterfaceName,
			samples
		);
		return str;
	}

	renderInterface() {
		if (this.fields.length == 0) return "";

		let fields = "";

		for (const field of this.fields)
			fields += field.render(this.interfaceName);

		return `
export interface ${this.interfaceName} {
    ${fields}
}
`;
	}
}
