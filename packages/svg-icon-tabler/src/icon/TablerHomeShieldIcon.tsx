import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeShieldIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeShieldIcon = React.forwardRef<SVGSVGElement, TablerHomeShieldIconProps>(
	function TablerHomeShieldIcon(props, ref) {
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
				<path d="M9 21v-6a2 2 0 0 1 2 -2h1.341" />
				<path d="M19.682 10.682l-7.682 -7.682l-9 9h2v7a2 2 0 0 0 2 2h5" />
				<path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHomeShieldIcon.displayName = "TablerHomeShieldIcon";
}
