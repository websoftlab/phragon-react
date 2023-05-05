import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileDigitIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileDigitIcon = React.forwardRef<SVGSVGElement, TablerFileDigitIconProps>(
	function TablerFileDigitIcon(props, ref) {
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
				<path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
				<path d="M14 2 L14 8 L20 8" />
				<path d="M10 12h2v6" />
				<path d="M2 12 H6 V18 H2 V12 z" />
				<path d="M10 18h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileDigitIcon.displayName = "TablerFileDigitIcon";
}
