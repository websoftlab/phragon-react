import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAxeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAxeIcon = React.forwardRef<SVGSVGElement, TablerAxeIconProps>(function TablerAxeIcon(props, ref) {
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
			<path d="m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" />
			<path d="M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAxeIcon.displayName = "TablerAxeIcon";
}
