import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPoundSterlingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPoundSterlingIcon = React.forwardRef<SVGSVGElement, TablerPoundSterlingIconProps>(
	function TablerPoundSterlingIcon(props, ref) {
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
				<path d="M18 7c0-5.333-8-5.333-8 0" />
				<path d="M10 7v14" />
				<path d="M6 21h12" />
				<path d="M6 13h10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPoundSterlingIcon.displayName = "TablerPoundSterlingIcon";
}
