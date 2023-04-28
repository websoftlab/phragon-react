import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDisabledOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDisabledOffIcon = React.forwardRef<SVGSVGElement, TablerDisabledOffIconProps>(
	function TablerDisabledOffIcon(props, ref) {
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
				<path d="M11 7a2 2 0 1 0 -2 -2" />
				<path d="M11 11v4h4l4 5" />
				<path d="M15 11h1" />
				<path d="M7 11.5a5 5 0 1 0 6 7.5" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDisabledOffIcon.displayName = "TablerDisabledOffIcon";
}
