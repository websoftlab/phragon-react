import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCornerLeftUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCornerLeftUpIcon = React.forwardRef<SVGSVGElement, TablerCornerLeftUpIconProps>(
	function TablerCornerLeftUpIcon(props, ref) {
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
				<path d="M14 9 L9 4 L4 9" />
				<path d="M20 20h-7a4 4 0 0 1-4-4V4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCornerLeftUpIcon.displayName = "TablerCornerLeftUpIcon";
}
