import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerListIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerListIcon = React.forwardRef<SVGSVGElement, TablerListIconProps>(function TablerListIcon(props, ref) {
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
			<path d="M9 6l11 0" />
			<path d="M9 12l11 0" />
			<path d="M9 18l11 0" />
			<path d="M5 6l0 .01" />
			<path d="M5 12l0 .01" />
			<path d="M5 18l0 .01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerListIcon.displayName = "TablerListIcon";
}
