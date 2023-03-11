import { __isWeb__ } from "@phragon-util/global-var";
import { useEffect, useState } from "react";

export function useMountSafe() {
	const [mount, setMount] = useState(false);
	useEffect(() => {
		setMount(true);
	}, []);
	return mount;
}

export function useMount() {
	if (__isWeb__()) {
		return useMountSafe();
	} else {
		return false;
	}
}
