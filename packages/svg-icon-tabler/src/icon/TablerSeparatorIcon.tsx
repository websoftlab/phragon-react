import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSeparatorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSeparatorIcon = React.forwardRef<SVGSVGElement, TablerSeparatorIconProps>(
	function TablerSeparatorIcon(props, ref) {
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
				<path d="M3 12l0 .01" />
				<path d="M7 12l10 0" />
				<path d="M21 12l0 .01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSeparatorIcon.displayName = "TablerSeparatorIcon";
}
