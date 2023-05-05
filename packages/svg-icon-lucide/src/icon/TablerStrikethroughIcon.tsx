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
				<path d="M16 4H9a3 3 0 0 0-2.83 4" />
				<path d="M14 12a4 4 0 0 1 0 8H6" />
				<path d="M4 12 L20 12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerStrikethroughIcon.displayName = "TablerStrikethroughIcon";
}
