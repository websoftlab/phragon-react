import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLineIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLineIcon = React.forwardRef<SVGSVGElement, TablerLineIconProps>(function TablerLineIcon(props, ref) {
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
			<path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M18 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M7.5 16.5l9 -9" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLineIcon.displayName = "TablerLineIcon";
}
