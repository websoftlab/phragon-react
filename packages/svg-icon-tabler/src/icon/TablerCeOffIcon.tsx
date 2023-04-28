import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCeOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCeOffIcon = React.forwardRef<SVGSVGElement, TablerCeOffIconProps>(function TablerCeOffIcon(
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
			<path d="M11 4a7.99 7.99 0 0 0 -2.581 .426" />
			<path d="M5.867 5.864a8 8 0 0 0 5.133 14.136" />
			<path d="M20 4a8 8 0 0 0 -7.29 4.7" />
			<path d="M12 12a8 8 0 0 0 8 8" />
			<path d="M16 12h4" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCeOffIcon.displayName = "TablerCeOffIcon";
}
