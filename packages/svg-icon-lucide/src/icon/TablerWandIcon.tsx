import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWandIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWandIcon = React.forwardRef<SVGSVGElement, TablerWandIconProps>(function TablerWandIcon(props, ref) {
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
			<path d="M15 4V2" />
			<path d="M15 16v-2" />
			<path d="M8 9h2" />
			<path d="M20 9h2" />
			<path d="M17.8 11.8 19 13" />
			<path d="M15 9h0" />
			<path d="M17.8 6.2 19 5" />
			<path d="m3 21 9-9" />
			<path d="M12.2 6.2 11 5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWandIcon.displayName = "TablerWandIcon";
}
