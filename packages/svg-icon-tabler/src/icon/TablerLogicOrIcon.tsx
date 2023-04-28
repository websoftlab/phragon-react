import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLogicOrIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLogicOrIcon = React.forwardRef<SVGSVGElement, TablerLogicOrIconProps>(function TablerLogicOrIcon(
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
			<path d="M22 12h-6" />
			<path d="M2 9h7" />
			<path d="M2 15h7" />
			<path d="M8 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLogicOrIcon.displayName = "TablerLogicOrIcon";
}
