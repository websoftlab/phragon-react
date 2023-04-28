import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTriangleInvertedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTriangleInvertedIcon = React.forwardRef<SVGSVGElement, TablerTriangleInvertedIconProps>(
	function TablerTriangleInvertedIcon(props, ref) {
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
				<path d="M10.24 20.043l-8.422 -14.06a1.989 1.989 0 0 1 1.7 -2.983h16.845a1.989 1.989 0 0 1 1.7 2.983l-8.422 14.06a1.989 1.989 0 0 1 -3.4 0z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTriangleInvertedIcon.displayName = "TablerTriangleInvertedIcon";
}
