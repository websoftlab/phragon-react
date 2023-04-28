import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBugIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBugIcon = React.forwardRef<SVGSVGElement, TablerBugIconProps>(function TablerBugIcon(props, ref) {
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
			<path d="M9 9v-1a3 3 0 0 1 6 0v1" />
			<path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3" />
			<path d="M3 13l4 0" />
			<path d="M17 13l4 0" />
			<path d="M12 20l0 -6" />
			<path d="M4 19l3.35 -2" />
			<path d="M20 19l-3.35 -2" />
			<path d="M4 7l3.75 2.4" />
			<path d="M20 7l-3.75 2.4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBugIcon.displayName = "TablerBugIcon";
}
