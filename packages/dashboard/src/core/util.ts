export type ReqActionProps<
	Req extends {} = any,
	BaseProps extends { name?: string; data?: any; parameters?: any } = { name?: string; data?: any; parameters?: any }
> = BaseProps & {
	req: Req;
	reqParameters?: Record<keyof Req, string>;
	reqPost?: (keyof Req)[] | "*";
};

export function rand(prefix: string = "") {
	return prefix + Math.random().toString(32).substring(2);
}

export function isEmpty<T = any>(value: T[] | string | number | null | undefined): boolean {
	return (
		value == null ||
		(typeof value === "string" && value.length === 0) ||
		(Array.isArray(value) && value.length === 0)
	);
}

export function isNotEmpty<T = any>(value: T[] | string | number | null | undefined): boolean {
	return !isEmpty<T>(value);
}

export function makeReqProps<
	Req extends {} = any,
	BaseProps extends { name?: string; data?: any; parameters?: any } = { name?: string; data?: any; parameters?: any }
>(props: ReqActionProps<Req, BaseProps>) {
	let { req = {}, reqPost, reqParameters, data, parameters, ...rest } = props;

	if (rest.name && reqParameters) {
		const keys = Object.keys(reqParameters) as (keyof Req)[];
		if (!parameters) {
			parameters = {};
		}
		for (const key of keys) {
			const name = reqParameters[key];
			parameters[name] = (req as any)[key];
		}
	}

	if (reqPost) {
		if (reqPost === "*") {
			reqPost = Object.keys(req) as (keyof Req)[];
		}
		if (Array.isArray(reqPost)) {
			if (!data) {
				data = {};
			}
			for (const key of reqPost) {
				data[key] = (req as any)[key];
			}
		}
	}

	return {
		data,
		parameters,
		...rest,
	};
}
