import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCatIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCatIcon = React.forwardRef<SVGSVGElement, TablerCatIconProps>(function TablerCatIcon(props, ref) {
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
			<path d="M20 3v10a8 8 0 1 1 -16 0v-10l3.432 3.432a7.963 7.963 0 0 1 4.568 -1.432c1.769 0 3.403 .574 4.728 1.546l3.272 -3.546z" />
			<path d="M2 16h5l-4 4" />
			<path d="M22 16h-5l4 4" />
			<path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M9 11v.01" />
			<path d="M15 11v.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCatIcon.displayName = "TablerCatIcon";
}
