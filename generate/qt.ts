import {
	quicktype,
	InputData,
	jsonInputForTargetLanguage,
} from "quicktype-core";

export async function generateReturnInterfaces(
	topInterfaceName: string,
	samples: Array<string>
) {
	const jsonInput = jsonInputForTargetLanguage("typescript");

	// We could add multiple samples for the same desired
	// type, or many sources for other types. Here we're
	// just making one type from one piece of sample JSON.
	await jsonInput.addSource({
		name: topInterfaceName,
		samples: samples,
	});

	const inputData = new InputData();
	inputData.addInput(jsonInput);

	const result = await quicktype({
		inputData,
		lang: "typescript",
		combineClasses: true,
	});

	let str = result.lines
		.filter((x) => !x.startsWith("//"))
		.map((x) => x.toString())
		.join("\n");
	str = str.substr(0, str.indexOf("export class Convert"));

	// replace defaults
	str = str.replace(/(\w+) \| (string|null)/g, "$1");
	str = str.replace(/null \| string/g, "string");
	str = str.replace(/null \| number/g, "string");
	str = str.replace(/string \| null/g, "string");
	str = str.replace(/number \| null/g, "string");
	str = str.replace(/(total:\s+)null;/g, "$1number;");
	str = str.replace(/(prev:\s+)null;/g, "$1string;");
	str = str.replace(/(next:\s+)null;/g, "$1string;");
	str = str.replace(/(:\s+)null;/g, "$1string;");

	for (let i of [...str.match(/interface \w+/g)]) {
		i = i.split(" ")[1];
		const original = i;
		if (original == topInterfaceName) continue;

		const replacement = topInterfaceName + original.replace("Class", "");

		str = str.replace(
			new RegExp("interface " + original + " {", "g"),
			"interface " + replacement + " {"
		);
		str = str.replace(
			new RegExp(" " + original + ";", "g"),
			" " + replacement + ";"
		);
		str = str.replace(
			new RegExp(" " + original + "\\[\\];", "g"),
			" " + replacement + "[];"
		);
	}

	return str;
}
