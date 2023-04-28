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
				<path d="M10.24 3.957l-8.422 14.06a1.989 1.989 0 0 0 1.7 2.983h16.845a1.989 1.989 0 0 0 1.7 -2.983l-8.423 -14.06a1.989 1.989 0 0 0 -3.4 0z" />
				<path d="M12 9v4" />
				<path d="M12 17h.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlertTriangleIcon.displayName = "TablerAlertTriangleIcon";
}
