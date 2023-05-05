import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCaseSensitiveIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCaseSensitiveIcon = React.forwardRef<SVGSVGElement, TablerCaseSensitiveIconProps>(
	function TablerCaseSensitiveIcon(props, ref) {
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
				<path d="M3 15 L7 7 L11 15" />
				<path d="M4 13 L10 13" />
				<path d="M21 12 A3 3 0 0 1 18 15 A3 3 0 0 1 15 12 A3 3 0 0 1 21 12" />
				<path d="M21 9 L21 15" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCaseSensitiveIcon.displayName = "TablerCaseSensitiveIcon";
}
