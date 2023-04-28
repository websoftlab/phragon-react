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
				<path d="M4 6l16 0" />
				<path d="M8 12l8 0" />
				<path d="M6 18l12 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlignCenterIcon.displayName = "TablerAlignCenterIcon";
}
