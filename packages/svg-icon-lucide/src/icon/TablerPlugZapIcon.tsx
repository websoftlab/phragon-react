import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlugZapIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlugZapIcon = React.forwardRef<SVGSVGElement, TablerPlugZapIconProps>(function TablerPlugZapIcon(
	props,
	ref
) {
	const { children, ...rest } = props;
	return (
		<SvgIcon
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
			ref={ref}
			size={24}
			icon={undefined}
			fill="none"
		>
			<path d="M10 13 H14 A2 2 0 0 1 16 15 V17 A2 2 0 0 1 14 19 H10 A2 2 0 0 1 8 17 V15 A2 2 0 0 1 10 13 z" />
			<path d="m13 2-2 2.5h3L12 7" />
			<path d="M12 22v-3" />
			<path d="M10 13v-2.5" />
			<path d="M14 13v-2.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPlugZapIcon.displayName = "TablerPlugZapIcon";
}
