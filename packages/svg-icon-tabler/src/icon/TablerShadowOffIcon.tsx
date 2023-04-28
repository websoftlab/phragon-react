import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShadowOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShadowOffIcon = React.forwardRef<SVGSVGElement, TablerShadowOffIconProps>(
	function TablerShadowOffIcon(props, ref) {
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
				<path d="M5.634 5.638a9 9 0 0 0 12.728 12.727m1.68 -2.32a9 9 0 0 0 -12.086 -12.088" />
				<path d="M16 12h2" />
				<path d="M13 15h2" />
				<path d="M13 18h1" />
				<path d="M13 9h4" />
				<path d="M13 6h1" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerShadowOffIcon.displayName = "TablerShadowOffIcon";
}
