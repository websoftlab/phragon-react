import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerReplaceIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerReplaceIcon = React.forwardRef<SVGSVGElement, TablerReplaceIconProps>(function TablerReplaceIcon(
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
			<path d="M4 14 H8 A2 2 0 0 1 10 16 V20 A2 2 0 0 1 8 22 H4 A2 2 0 0 1 2 20 V16 A2 2 0 0 1 4 14 z" />
			<path d="m3 7 3 3 3-3" />
			<path d="M6 10V5a2.95 2.95 0 0 1 3-3h1" />
			<path d="M22 8a2 2 0 0 1-2 2" />
			<path d="M20 2a2 2 0 0 1 2 2" />
			<path d="M14 4a2 2 0 0 1 2-2" />
			<path d="M16 10a2 2 0 0 1-2-2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerReplaceIcon.displayName = "TablerReplaceIcon";
}
