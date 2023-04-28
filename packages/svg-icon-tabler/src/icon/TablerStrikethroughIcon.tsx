import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStrikethroughIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStrikethroughIcon = React.forwardRef<SVGSVGElement, TablerStrikethroughIconProps>(
	function TablerStrikethroughIcon(props, ref) {
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
				<path d="M5 12l14 0" />
				<path d="M16 6.5a4 2 0 0 0 -4 -1.5h-1a3.5 3.5 0 0 0 0 7h2a3.5 3.5 0 0 1 0 7h-1.5a4 2 0 0 1 -4 -1.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerStrikethroughIcon.displayName = "TablerStrikethroughIcon";
}
