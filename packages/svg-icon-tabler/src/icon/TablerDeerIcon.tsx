import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeerIcon = React.forwardRef<SVGSVGElement, TablerDeerIconProps>(function TablerDeerIcon(props, ref) {
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
			<path d="M3 3c0 2 1 3 4 3c2 0 3 1 3 3" />
			<path d="M21 3c0 2 -1 3 -4 3c-2 0 -3 .333 -3 3" />
			<path d="M12 18c-1 0 -4 -3 -4 -6c0 -2 1.333 -3 4 -3s4 1 4 3c0 3 -3 6 -4 6" />
			<path d="M15.185 14.889l.095 -.18a4 4 0 1 1 -6.56 0" />
			<path d="M17 3c0 1.333 -.333 2.333 -1 3" />
			<path d="M7 3c0 1.333 .333 2.333 1 3" />
			<path d="M7 6c-2.667 .667 -4.333 1.667 -5 3" />
			<path d="M17 6c2.667 .667 4.333 1.667 5 3" />
			<path d="M8.5 10l-1.5 -1" />
			<path d="M15.5 10l1.5 -1" />
			<path d="M12 15h.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDeerIcon.displayName = "TablerDeerIcon";
}
