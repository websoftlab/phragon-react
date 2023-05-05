import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCornerDownLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCornerDownLeftIcon = React.forwardRef<SVGSVGElement, TablerCornerDownLeftIconProps>(
	function TablerCornerDownLeftIcon(props, ref) {
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
				<path d="M9 10 L4 15 L9 20" />
				<path d="M20 4v7a4 4 0 0 1-4 4H4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCornerDownLeftIcon.displayName = "TablerCornerDownLeftIcon";
}
