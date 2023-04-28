import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBracketsContainStartIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBracketsContainStartIcon = React.forwardRef<SVGSVGElement, TablerBracketsContainStartIconProps>(
	function TablerBracketsContainStartIcon(props, ref) {
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
				<path d="M9 4h-4v16h4" />
				<path d="M18 16h-.01" />
				<path d="M14 16h-.01" />
				<path d="M10 16h-.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBracketsContainStartIcon.displayName = "TablerBracketsContainStartIcon";
}
