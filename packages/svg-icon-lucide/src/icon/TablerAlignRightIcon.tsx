import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignRightIcon = React.forwardRef<SVGSVGElement, TablerAlignRightIconProps>(
	function TablerAlignRightIcon(props, ref) {
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
				<path d="M21 6 L3 6" />
				<path d="M21 12 L9 12" />
				<path d="M21 18 L7 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlignRightIcon.displayName = "TablerAlignRightIcon";
}
