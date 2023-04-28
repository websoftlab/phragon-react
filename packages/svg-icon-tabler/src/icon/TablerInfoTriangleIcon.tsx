import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerInfoTriangleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerInfoTriangleIcon = React.forwardRef<SVGSVGElement, TablerInfoTriangleIconProps>(
	function TablerInfoTriangleIcon(props, ref) {
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
				<path d="M12 10h.01" />
				<path d="M11 13h1v4h1" />
				<path d="M10.24 3.957l-8.422 14.06a1.989 1.989 0 0 0 1.7 2.983h16.845a1.989 1.989 0 0 0 1.7 -2.983l-8.423 -14.06a1.989 1.989 0 0 0 -3.4 0z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerInfoTriangleIcon.displayName = "TablerInfoTriangleIcon";
}
