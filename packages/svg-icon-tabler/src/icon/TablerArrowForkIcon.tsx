import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowForkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowForkIcon = React.forwardRef<SVGSVGElement, TablerArrowForkIconProps>(
	function TablerArrowForkIcon(props, ref) {
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
				<path d="M16 3h5v5" />
				<path d="M8 3h-5v5" />
				<path d="M21 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" />
				<path d="M3 3l7.536 7.536a5 5 0 0 1 1.464 3.534v.93" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowForkIcon.displayName = "TablerArrowForkIcon";
}
