import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFishIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFishIcon = React.forwardRef<SVGSVGElement, TablerFishIconProps>(function TablerFishIcon(props, ref) {
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
			<path d="M16.69 7.44a6.973 6.973 0 0 0 -1.69 4.56c0 1.747 .64 3.345 1.699 4.571" />
			<path d="M2 9.504c7.715 8.647 14.75 10.265 20 2.498c-5.25 -7.761 -12.285 -6.142 -20 2.504" />
			<path d="M18 11v.01" />
			<path d="M11.5 10.5c-.667 1 -.667 2 0 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFishIcon.displayName = "TablerFishIcon";
}
