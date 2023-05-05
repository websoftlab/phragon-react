import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAnchorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAnchorIcon = React.forwardRef<SVGSVGElement, TablerAnchorIconProps>(function TablerAnchorIcon(
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
			<path d="M15 5 A3 3 0 0 1 12 8 A3 3 0 0 1 9 5 A3 3 0 0 1 15 5" />
			<path d="M12 22 L12 8" />
			<path d="M5 12H2a10 10 0 0 0 20 0h-3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAnchorIcon.displayName = "TablerAnchorIcon";
}
