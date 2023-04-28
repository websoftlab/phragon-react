import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowUpIcon = React.forwardRef<SVGSVGElement, TablerArrowUpIconProps>(function TablerArrowUpIcon(
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
			<path d="M12 5l0 14" />
			<path d="M18 11l-6 -6" />
			<path d="M6 11l6 -6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerArrowUpIcon.displayName = "TablerArrowUpIcon";
}
