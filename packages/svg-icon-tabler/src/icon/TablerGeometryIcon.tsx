import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGeometryIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGeometryIcon = React.forwardRef<SVGSVGElement, TablerGeometryIconProps>(function TablerGeometryIcon(
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
			<path d="M7 21l4 -12m2 0l1.48 4.439m.949 2.847l1.571 4.714" />
			<path d="M12 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M4 12c1.526 2.955 4.588 5 8 5c3.41 0 6.473 -2.048 8 -5" />
			<path d="M12 5v-2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGeometryIcon.displayName = "TablerGeometryIcon";
}
