import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowDownRightFromCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowDownRightFromCircleIcon = React.forwardRef<
	SVGSVGElement,
	TablerArrowDownRightFromCircleIconProps
>(function TablerArrowDownRightFromCircleIcon(props, ref) {
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
			<path d="M22 16 L22 22 L16 22" />
			<path d="M22 22 L12 12" />
			<path d="M12,22C6.5,22,2,17.5,2,12S6.5,2,12,2s10,4.5,10,10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerArrowDownRightFromCircleIcon.displayName = "TablerArrowDownRightFromCircleIcon";
}
