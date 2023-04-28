import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlayerSkipForwardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlayerSkipForwardIcon = React.forwardRef<SVGSVGElement, TablerPlayerSkipForwardIconProps>(
	function TablerPlayerSkipForwardIcon(props, ref) {
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
				<path d="M4 5v14l12 -7z" />
				<path d="M20 5l0 14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlayerSkipForwardIcon.displayName = "TablerPlayerSkipForwardIcon";
}
