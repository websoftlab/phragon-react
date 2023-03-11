export function rand(prefix: string = "") {
	return prefix + Math.random().toString(32).substring(2);
}
