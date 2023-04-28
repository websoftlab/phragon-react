import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVinylIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVinylIcon = React.forwardRef<SVGSVGElement, TablerVinylIconProps>(function TablerVinylIcon(
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
			<path d="M16 3.937a9 9 0 1 0 5 8.063" />
			<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M20 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M20 4l-3.5 10l-2.5 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerVinylIcon.displayName = "TablerVinylIcon";
}
