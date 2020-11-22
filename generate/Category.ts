import { capitalize } from "./utils";
import { Spec } from "./Spec";

export class Category {
	readonly specs = new Array<Spec>();
	readonly capitalizedName: string;
    readonly className: string;
	readonly name: string;

	constructor(name: string) {
		this.name = parseCategoryName(name);
        this.capitalizedName = capitalize(this.name);
		this.className = this.capitalizedName + "Endpoint";
	}

	async render(){

		let interfaces = "";
		let methods = "";

		for(const spec of this.specs){
			interfaces += spec.renderInterface();
			interfaces += await spec.renderReturnInterface();
			methods += spec.renderMethod(this.className);
		}


        return `
import { Disqus } from "./../disqus";

${interfaces}

export class ${this.className} {

    constructor(private client: Disqus) { }
${methods}
}
`;

	}
}

export function parseCategoryName(name: string){
	if(name.indexOf("/") == -1){
		return name;
	};

	const split = name.split('/');

	for(let i = 1; i< split.length; i++){
		split[i] = capitalize(split[i]);
	}

	return split.join("");
}