import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHeadingOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHeadingOffIcon = React.forwardRef<SVGSVGElement, TablerHeadingOffIconProps>(
	function TablerHeadingOffIcon(props, ref) {
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
				<path d="M7 12h5m4 0h1" />
				<path d="M7 7v12" />
				<path d="M17 5v8m0 4v2" />
				<path d="M15 19h4" />
				<path d="M15 5h4" />
				<path d="M5 19h4" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHeadingOffIcon.displayName = "TablerHeadingOffIcon";
}
