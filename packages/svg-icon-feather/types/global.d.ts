import type { SvgIconName } from "@phragon-react/svg-icon";
import type { IconFeatherName } from "@phragon-react/svg-icon-feather";

declare module "@phragon-react/svg-icon" {
	type SvgIconName<Name extends string = string> = FeatherIconName | Name;
}
