import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMusic3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMusic3Icon = React.forwardRef<SVGSVGElement, TablerMusic3IconProps>(function TablerMusic3Icon(
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
			<path d="M16 18 A4 4 0 0 1 12 22 A4 4 0 0 1 8 18 A4 4 0 0 1 16 18" />
			<path d="M16 18V2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMusic3Icon.displayName = "TablerMusic3Icon";
}
