import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrailleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrailleIcon = React.forwardRef<SVGSVGElement, TablerBrailleIconProps>(function TablerBrailleIcon(
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
			<path d="M15 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" />
			<path d="M7 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" />
			<path d="M7 19a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" />
			<path d="M16 12h.01" />
			<path d="M8 12h.01" />
			<path d="M16 19h.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBrailleIcon.displayName = "TablerBrailleIcon";
}
