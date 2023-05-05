import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMouseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMouseIcon = React.forwardRef<SVGSVGElement, TablerMouseIconProps>(function TablerMouseIcon(
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
			<path d="M12 3 H12 A6 6 0 0 1 18 9 V15 A6 6 0 0 1 12 21 H12 A6 6 0 0 1 6 15 V9 A6 6 0 0 1 12 3 z" />
			<path d="M12 7v4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMouseIcon.displayName = "TablerMouseIcon";
}
