import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowBarToDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowBarToDownIcon = React.forwardRef<SVGSVGElement, TablerArrowBarToDownIconProps>(
	function TablerArrowBarToDownIcon(props, ref) {
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
				<path d="M4 20l16 0" />
				<path d="M12 14l0 -10" />
				<path d="M12 14l4 -4" />
				<path d="M12 14l-4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowBarToDownIcon.displayName = "TablerArrowBarToDownIcon";
}
