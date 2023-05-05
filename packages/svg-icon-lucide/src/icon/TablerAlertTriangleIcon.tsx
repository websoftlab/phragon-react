import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlertTriangleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlertTriangleIcon = React.forwardRef<SVGSVGElement, TablerAlertTriangleIconProps>(
	function TablerAlertTriangleIcon(props, ref) {
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
				<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
				<path d="M12 9 L12 13" />
				<path d="M12 17 L12.01 17" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlertTriangleIcon.displayName = "TablerAlertTriangleIcon";
}
