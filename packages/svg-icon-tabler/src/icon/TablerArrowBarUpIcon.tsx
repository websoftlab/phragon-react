import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowBarUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowBarUpIcon = React.forwardRef<SVGSVGElement, TablerArrowBarUpIconProps>(
	function TablerArrowBarUpIcon(props, ref) {
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
				<path d="M12 4l0 10" />
				<path d="M12 4l4 4" />
				<path d="M12 4l-4 4" />
				<path d="M4 20l16 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowBarUpIcon.displayName = "TablerArrowBarUpIcon";
}
