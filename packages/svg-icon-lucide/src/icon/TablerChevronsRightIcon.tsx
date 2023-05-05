import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChevronsRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChevronsRightIcon = React.forwardRef<SVGSVGElement, TablerChevronsRightIconProps>(
	function TablerChevronsRightIcon(props, ref) {
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
				<path d="M13 17 L18 12 L13 7" />
				<path d="M6 17 L11 12 L6 7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChevronsRightIcon.displayName = "TablerChevronsRightIcon";
}
