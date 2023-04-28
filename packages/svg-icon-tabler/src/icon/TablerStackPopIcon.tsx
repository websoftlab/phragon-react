import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStackPopIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStackPopIcon = React.forwardRef<SVGSVGElement, TablerStackPopIconProps>(function TablerStackPopIcon(
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
			<path d="M7 9.5l-3 1.5l8 4l8 -4l-3 -1.5" />
			<path d="M4 15l8 4l8 -4" />
			<path d="M12 11v-7" />
			<path d="M9 7l3 -3l3 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerStackPopIcon.displayName = "TablerStackPopIcon";
}
