import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLeafIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLeafIcon = React.forwardRef<SVGSVGElement, TablerLeafIconProps>(function TablerLeafIcon(props, ref) {
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
			<path d="M5 21c.5 -4.5 2.5 -8 7 -10" />
			<path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLeafIcon.displayName = "TablerLeafIcon";
}
