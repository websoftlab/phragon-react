import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTextIncreaseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTextIncreaseIcon = React.forwardRef<SVGSVGElement, TablerTextIncreaseIconProps>(
	function TablerTextIncreaseIcon(props, ref) {
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
				<path d="M4 19v-10.5a3.5 3.5 0 1 1 7 0v10.5" />
				<path d="M4 13h7" />
				<path d="M18 9v6" />
				<path d="M21 12h-6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTextIncreaseIcon.displayName = "TablerTextIncreaseIcon";
}
