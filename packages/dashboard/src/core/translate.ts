import type { Lexicon } from "@phragon/lexicon";
import type { DashboardService } from "../DashboardService";

export interface TranslateActionProps extends Lexicon.TranslateOptions {}
export interface TranslateLanguageActionProps {}

function translate(dashboard: DashboardService, props: TranslateActionProps) {
	return dashboard.api.app.translator(props);
}

function language(dashboard: DashboardService, _props: TranslateLanguageActionProps = {}) {
	return dashboard.api.app.language;
}

export function addTranslateActions(service: DashboardService) {
	return service.addActions({
		translate: (props: TranslateActionProps) => translate(service, props),
		"translate.language": (props: TranslateLanguageActionProps = {}) => language(service, props),
	});
}
