import type { useLexiconPackageLoaderHook, LexiconPackageLoaderState } from "./types";
import { useCallback, useEffect, useState } from "react";
import { useAppStore } from "@phragon/render-driver-react/app";

export function useLexiconPackageLoader(packageName: string | string[]): useLexiconPackageLoaderHook {
	const app = useAppStore();
	const packageNameList = Array.isArray(packageName) ? packageName : [packageName];
	const [state, setState] = useState<LexiconPackageLoaderState>(() => {
		return {
			loaded: packageNameList.every((name) => app.packages.includes(name)),
			error: false,
			message: null,
		};
	});

	const { loaded } = state;
	useEffect(() => {
		if (loaded) {
			return;
		}

		let mount = true;

		async function load() {
			await Promise.all(packageNameList.map(async (name) => app.loadLanguage(app.language, name)));
		}

		function onLoad(error: unknown = null) {
			if (mount) {
				setState({
					loaded: true,
					error: error != null,
					message: error == null ? null : error instanceof Error ? error.message : "Load error",
				});
			}
		}

		load().then(
			() => onLoad(),
			(err) => onLoad(err)
		);

		return () => {
			mount = false;
		};
	}, [packageNameList.join("/"), loaded]);

	return {
		...state,
		onReload: useCallback(() => {
			setState({
				loaded: false,
				error: false,
				message: null,
			});
		}, []),
	};
}
