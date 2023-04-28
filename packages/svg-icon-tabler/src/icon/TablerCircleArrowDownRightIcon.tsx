import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleArrowDownRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleArrowDownRightIcon = React.forwardRef<SVGSVGElement, TablerCircleArrowDownRightIconProps>(
	function TablerCircleArrowDownRightIcon(props, ref) {
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
				<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
				<path d="M15 15h-6" />
				<path d="M15 9v6l-6 -6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleArrowDownRightIcon.displayName = "TablerCircleArrowDownRightIcon";
}
