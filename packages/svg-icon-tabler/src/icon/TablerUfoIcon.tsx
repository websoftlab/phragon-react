import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUfoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUfoIcon = React.forwardRef<SVGSVGElement, TablerUfoIconProps>(function TablerUfoIcon(props, ref) {
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
			<path d="M16.95 9.01c3.02 .739 5.05 2.123 5.05 3.714c0 2.367 -4.48 4.276 -10 4.276s-10 -1.909 -10 -4.276c0 -1.59 2.04 -2.985 5.07 -3.724" />
			<path d="M7 9c0 1.105 2.239 2 5 2s5 -.895 5 -2v-.035c0 -2.742 -2.239 -4.965 -5 -4.965s-5 2.223 -5 4.965v.035" />
			<path d="M15 17l2 3" />
			<path d="M8.5 17l-1.5 3" />
			<path d="M12 14h.01" />
			<path d="M7 13h.01" />
			<path d="M17 13h.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerUfoIcon.displayName = "TablerUfoIcon";
}
