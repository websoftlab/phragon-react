import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFloatCenterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFloatCenterIcon = React.forwardRef<SVGSVGElement, TablerFloatCenterIconProps>(
	function TablerFloatCenterIcon(props, ref) {
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
				<path d="M9 5m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
				<path d="M4 7l1 0" />
				<path d="M4 11l1 0" />
				<path d="M19 7l1 0" />
				<path d="M19 11l1 0" />
				<path d="M4 15l16 0" />
				<path d="M4 19l16 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFloatCenterIcon.displayName = "TablerFloatCenterIcon";
}
