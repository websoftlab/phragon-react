import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBracketsOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBracketsOffIcon = React.forwardRef<SVGSVGElement, TablerBracketsOffIconProps>(
	function TablerBracketsOffIcon(props, ref) {
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
				<path d="M5 5v15h3" />
				<path d="M16 4h3v11m0 4v1h-3" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBracketsOffIcon.displayName = "TablerBracketsOffIcon";
}
