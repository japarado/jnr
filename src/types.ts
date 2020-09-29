type SimpleChoice = {
	label: string;
	value: string;
}

type AnyChoice = {
	[key: string]: string;
}

export type Choice = SimpleChoice & AnyChoice;
