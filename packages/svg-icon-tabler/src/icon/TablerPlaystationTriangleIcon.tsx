import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlaystationTriangleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlaystationTriangleIcon = React.forwardRef<SVGSVGElement, TablerPlaystationTriangleIconProps>(
	function TablerPlaystationTriangleIcon(props, ref) {
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
				<path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
				<path d="M7.5 15h9l-4.5 -8z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlaystationTriangleIcon.displayName = "TablerPlaystationTriangleIcon";
}
