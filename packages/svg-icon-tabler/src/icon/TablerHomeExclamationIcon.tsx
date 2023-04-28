import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeExclamationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeExclamationIcon = React.forwardRef<SVGSVGElement, TablerHomeExclamationIconProps>(
	function TablerHomeExclamationIcon(props, ref) {
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
				<path d="M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h8" />
				<path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.857 1.257" />
				<path d="M19 16v3" />
				<path d="M19 22v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHomeExclamationIcon.displayName = "TablerHomeExclamationIcon";
}
