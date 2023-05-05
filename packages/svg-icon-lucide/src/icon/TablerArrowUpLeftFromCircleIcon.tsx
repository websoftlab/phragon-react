import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowUpLeftFromCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowUpLeftFromCircleIcon = React.forwardRef<SVGSVGElement, TablerArrowUpLeftFromCircleIconProps>(
	function TablerArrowUpLeftFromCircleIcon(props, ref) {
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
				<path d="M12,2c5.5,0,10,4.5,10,10s-4.5,10-10,10S2,17.5,2,12" />
				<path d="M2 8 L2 2 L8 2" />
				<path d="M2 2 L12 12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowUpLeftFromCircleIcon.displayName = "TablerArrowUpLeftFromCircleIcon";
}
