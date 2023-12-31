export const request = async (server: string, then: Function) => {
	const response = await fetch(server);
	const json = await response.json();

	setTimeout(() => {
		then(json);
	}, 500);
};

export interface IGood {
	image: string,
	name: string,
	description: string,
	price: number,
	options?: { name: string, values: { value: string, price: string }[] }[],
};
export interface GoodResponse {
	list: IGood[]
};