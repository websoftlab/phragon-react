import type { Lexicon } from "@phragon/lexicon";
import type { ActionService } from "@phragon-util/action-service";

export interface TranslateActionProps extends Lexicon.TranslateOptions {}
export interface TranslateLanguageActionProps {}

function translate(translator: Lexicon.Translator, props: TranslateActionProps) {
	return translator(props);
}

function language(translator: Lexicon.Translator, _props: TranslateLanguageActionProps) {
	return translator.language();
}

export interface AddTranslateOptions {
	translator: Lexicon.Translator;
}

export function addTranslateActions(service: ActionService, options: AddTranslateOptions) {
	const { translator } = options;
	return service.addActions({
		translate: (props: TranslateActionProps) => translate(translator, props),
		"translate.language": (props: TranslateLanguageActionProps = {}) => language(translator, props),
	});
}
