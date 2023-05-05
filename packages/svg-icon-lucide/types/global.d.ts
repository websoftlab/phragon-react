import type { SvgIconName } from "@phragon-react/svg-icon";
import type { IconLucideName } from "@phragon-react/svg-icon-lucide";

declare module "@phragon-react/svg-icon" {
	type SvgIconName<Name extends string = string> = IconLucideName | Name;
}
