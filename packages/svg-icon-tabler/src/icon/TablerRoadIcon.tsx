import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRoadIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRoadIcon = React.forwardRef<SVGSVGElement, TablerRoadIconProps>(function TablerRoadIcon(props, ref) {
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
			<path d="M4 19l4 -14" />
			<path d="M16 5l4 14" />
			<path d="M12 8v-2" />
			<path d="M12 13v-2" />
			<path d="M12 18v-2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRoadIcon.displayName = "TablerRoadIcon";
}
