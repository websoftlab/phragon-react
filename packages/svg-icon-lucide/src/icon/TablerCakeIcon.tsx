import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCakeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCakeIcon = React.forwardRef<SVGSVGElement, TablerCakeIconProps>(function TablerCakeIcon(props, ref) {
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
			<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
			<path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
			<path d="M2 21h20" />
			<path d="M7 8v2" />
			<path d="M12 8v2" />
			<path d="M17 8v2" />
			<path d="M7 4h.01" />
			<path d="M12 4h.01" />
			<path d="M17 4h.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCakeIcon.displayName = "TablerCakeIcon";
}
