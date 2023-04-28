import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrekkingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrekkingIcon = React.forwardRef<SVGSVGElement, TablerTrekkingIconProps>(function TablerTrekkingIcon(
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
			<path d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M7 21l2 -4" />
			<path d="M13 21v-4l-3 -3l1 -6l3 4l3 2" />
			<path d="M10 14l-1.827 -1.218a2 2 0 0 1 -.831 -2.15l.28 -1.117a2 2 0 0 1 1.939 -1.515h1.439l4 1l3 -2" />
			<path d="M17 12v9" />
			<path d="M16 20h2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTrekkingIcon.displayName = "TablerTrekkingIcon";
}
