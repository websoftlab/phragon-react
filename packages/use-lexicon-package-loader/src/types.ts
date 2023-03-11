export interface LexiconPackageLoaderState {
	loaded: boolean;
	error: boolean;
	message: string | null;
}

export interface useLexiconPackageLoaderHook extends LexiconPackageLoaderState {
	onReload(): void;
}
