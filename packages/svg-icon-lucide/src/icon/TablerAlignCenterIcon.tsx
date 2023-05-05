import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlignCenterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlignCenterIcon = React.forwardRef<SVGSVGElement, TablerAlignCenterIconProps>(
	function TablerAlignCenterIcon(props, ref) {
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
				<path d="M17 12 L7 12" />
				<path d="M19 18 L5 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlignCenterIcon.displayName = "TablerAlignCenterIcon";
}
