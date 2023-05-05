import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMailboxIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMailboxIcon = React.forwardRef<SVGSVGElement, TablerMailboxIconProps>(function TablerMailboxIcon(
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
			<path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
			<path d="M15 9 L18 9 L18 11" />
			<path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
			<path d="M6 10 L7 10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMailboxIcon.displayName = "TablerMailboxIcon";
}
