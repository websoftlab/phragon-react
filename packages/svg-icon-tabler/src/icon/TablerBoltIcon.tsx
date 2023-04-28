import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBoltIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBoltIcon = React.forwardRef<SVGSVGElement, TablerBoltIconProps>(function TablerBoltIcon(props, ref) {
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
			<path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBoltIcon.displayName = "TablerBoltIcon";
}
