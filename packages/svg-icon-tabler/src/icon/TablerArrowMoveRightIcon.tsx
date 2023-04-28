import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowMoveRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowMoveRightIcon = React.forwardRef<SVGSVGElement, TablerArrowMoveRightIconProps>(
	function TablerArrowMoveRightIcon(props, ref) {
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
				<path d="M11 12h10" />
				<path d="M18 9l3 3l-3 3" />
				<path d="M7 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowMoveRightIcon.displayName = "TablerArrowMoveRightIcon";
}
