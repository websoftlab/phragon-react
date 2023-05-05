import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClock12IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClock12Icon = React.forwardRef<SVGSVGElement, TablerClock12IconProps>(function TablerClock12Icon(
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
			<path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12" />
			<path d="M12 6 L12 12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerClock12Icon.displayName = "TablerClock12Icon";
}
