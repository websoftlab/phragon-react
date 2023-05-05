import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoonIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoonIcon = React.forwardRef<SVGSVGElement, TablerMoonIconProps>(function TablerMoonIcon(props, ref) {
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
			<path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMoonIcon.displayName = "TablerMoonIcon";
}
