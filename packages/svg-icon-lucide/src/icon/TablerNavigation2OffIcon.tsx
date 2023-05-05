import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNavigation2OffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNavigation2OffIcon = React.forwardRef<SVGSVGElement, TablerNavigation2OffIconProps>(
	function TablerNavigation2OffIcon(props, ref) {
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
				<path d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17" />
				<path d="M14.53 8.88 12 2l-1.17 3.17" />
				<path d="M2 2 L22 22" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerNavigation2OffIcon.displayName = "TablerNavigation2OffIcon";
}
