import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerOverlineIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerOverlineIcon = React.forwardRef<SVGSVGElement, TablerOverlineIconProps>(function TablerOverlineIcon(
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
			<path d="M7 9v5a5 5 0 0 0 10 0v-5" />
			<path d="M5 5h14" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerOverlineIcon.displayName = "TablerOverlineIcon";
}
