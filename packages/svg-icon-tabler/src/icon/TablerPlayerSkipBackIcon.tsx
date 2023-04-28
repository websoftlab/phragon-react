import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlayerSkipBackIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlayerSkipBackIcon = React.forwardRef<SVGSVGElement, TablerPlayerSkipBackIconProps>(
	function TablerPlayerSkipBackIcon(props, ref) {
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
				<path d="M20 5v14l-12 -7z" />
				<path d="M4 5l0 14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlayerSkipBackIcon.displayName = "TablerPlayerSkipBackIcon";
}
