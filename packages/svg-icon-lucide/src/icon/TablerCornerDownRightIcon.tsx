import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCornerDownRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCornerDownRightIcon = React.forwardRef<SVGSVGElement, TablerCornerDownRightIconProps>(
	function TablerCornerDownRightIcon(props, ref) {
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
				<path d="M15 10 L20 15 L15 20" />
				<path d="M4 4v7a4 4 0 0 0 4 4h12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCornerDownRightIcon.displayName = "TablerCornerDownRightIcon";
}
