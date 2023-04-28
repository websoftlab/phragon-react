import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZodiacGeminiIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZodiacGeminiIcon = React.forwardRef<SVGSVGElement, TablerZodiacGeminiIconProps>(
	function TablerZodiacGeminiIcon(props, ref) {
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
				<path d="M3 3a21 21 0 0 0 18 0" />
				<path d="M3 21a21 21 0 0 1 18 0" />
				<path d="M7 4.5l0 15" />
				<path d="M17 4.5l0 15" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerZodiacGeminiIcon.displayName = "TablerZodiacGeminiIcon";
}
