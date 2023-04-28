import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBracketsContainIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBracketsContainIcon = React.forwardRef<SVGSVGElement, TablerBracketsContainIconProps>(
	function TablerBracketsContainIcon(props, ref) {
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
				<path d="M7 4h-4v16h4" />
				<path d="M17 4h4v16h-4" />
				<path d="M8 16h.01" />
				<path d="M12 16h.01" />
				<path d="M16 16h.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBracketsContainIcon.displayName = "TablerBracketsContainIcon";
}
