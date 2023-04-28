import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClockBoltIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClockBoltIcon = React.forwardRef<SVGSVGElement, TablerClockBoltIconProps>(
	function TablerClockBoltIcon(props, ref) {
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
				<path d="M20.984 12.53a9 9 0 1 0 -7.552 8.355" />
				<path d="M12 7v5l3 3" />
				<path d="M19 16l-2 3h4l-2 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClockBoltIcon.displayName = "TablerClockBoltIcon";
}
