import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterSpacingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterSpacingIcon = React.forwardRef<SVGSVGElement, TablerLetterSpacingIconProps>(
	function TablerLetterSpacingIcon(props, ref) {
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
				<path d="M5 12v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5" />
				<path d="M13 4l3 8l3 -8" />
				<path d="M5 18h14" />
				<path d="M17 20l2 -2l-2 -2" />
				<path d="M7 16l-2 2l2 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLetterSpacingIcon.displayName = "TablerLetterSpacingIcon";
}
