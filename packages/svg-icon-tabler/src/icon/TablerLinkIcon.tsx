import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLinkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLinkIcon = React.forwardRef<SVGSVGElement, TablerLinkIconProps>(function TablerLinkIcon(props, ref) {
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
			<path d="M9 15l6 -6" />
			<path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
			<path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLinkIcon.displayName = "TablerLinkIcon";
}
