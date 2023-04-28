import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandCypressIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandCypressIcon = React.forwardRef<SVGSVGElement, TablerBrandCypressIconProps>(
	function TablerBrandCypressIcon(props, ref) {
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
				<path d="M19.48 17.007a9 9 0 1 0 -7.48 3.993c.896 0 1.691 -.573 1.974 -1.423l3.526 -10.577" />
				<path d="M13.5 9l2 6" />
				<path d="M10.764 9.411a3 3 0 1 0 -.023 5.19" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandCypressIcon.displayName = "TablerBrandCypressIcon";
}
