import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowMoveLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowMoveLeftIcon = React.forwardRef<SVGSVGElement, TablerArrowMoveLeftIconProps>(
	function TablerArrowMoveLeftIcon(props, ref) {
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
				<path d="M13 12h-10" />
				<path d="M6 15l-3 -3l3 -3" />
				<path d="M17 12a2 2 0 1 1 4 0a2 2 0 0 1 -4 0z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowMoveLeftIcon.displayName = "TablerArrowMoveLeftIcon";
}
