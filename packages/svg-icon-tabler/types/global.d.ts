import type { SvgIconName } from "@phragon-react/svg-icon";
import type { IconTablerName } from "@phragon-react/svg-icon-tabler";

declare module "@phragon-react/svg-icon" {
	type SvgIconName<Name extends string = string> = IconTablerName | Name;
}
