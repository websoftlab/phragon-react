import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCeIcon = React.forwardRef<SVGSVGElement, TablerCeIconProps>(function TablerCeIcon(props, ref) {
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
			<path d="M11 4a8 8 0 1 0 0 16" />
			<path d="M20 4a8 8 0 1 0 0 16" />
			<path d="M12 12l8 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCeIcon.displayName = "TablerCeIcon";
}
