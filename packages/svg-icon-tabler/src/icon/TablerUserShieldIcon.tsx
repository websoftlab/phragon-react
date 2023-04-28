import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUserShieldIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUserShieldIcon = React.forwardRef<SVGSVGElement, TablerUserShieldIconProps>(
	function TablerUserShieldIcon(props, ref) {
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
				<path d="M6 21v-2a4 4 0 0 1 4 -4h2" />
				<path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z" />
				<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerUserShieldIcon.displayName = "TablerUserShieldIcon";
}
