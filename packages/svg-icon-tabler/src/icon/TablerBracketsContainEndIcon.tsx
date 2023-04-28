import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBracketsContainEndIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBracketsContainEndIcon = React.forwardRef<SVGSVGElement, TablerBracketsContainEndIconProps>(
	function TablerBracketsContainEndIcon(props, ref) {
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
				<path d="M14 4h4v16h-4" />
				<path d="M5 16h.01" />
				<path d="M9 16h.01" />
				<path d="M13 16h.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBracketsContainEndIcon.displayName = "TablerBracketsContainEndIcon";
}
