export interface IParameter {
	isOptional: any;
	name: string;
	description: string;
}

export class Parameter {
	readonly type: string;

	constructor(
		public readonly name: string,
		public readonly description: string,
		public readonly isOptional: boolean
	) {
		this.type = "string";

		if (this.description) {
			if (this.description.indexOf("Valid values are") != -1) {
				this.type = [...this.description.match(/\d+/g)].join(" | ");
			} else if (this.description.indexOf("Choices:") != -1) {
				let items = this.description
					.match(/Choices:.*/)[0]
					.replace("Choices: ", "")
					.split(",")
					.map((x) => x.trim());
				this.type = '"' + items.join('" | "') + '"';
			}
		}
	}

	
	render(interfaceName: string) {
		let str = "\n";

		if (this.description) {
			str += `
        /**
         * ${this.description.replace(/\n/g, "\n         * ")}
         * 
         * @type {${this.type}}
         * @memberOf ${interfaceName}
         */`;
		}

		if (this.isOptional) {
			str += `
        ${this.name}?: ${this.type},`;
		} else {
			str += `
        ${this.name}: ${this.type},`;
		}

		return str;
	}
}
