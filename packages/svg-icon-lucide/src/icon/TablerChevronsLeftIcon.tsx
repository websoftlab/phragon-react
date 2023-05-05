import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChevronsLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChevronsLeftIcon = React.forwardRef<SVGSVGElement, TablerChevronsLeftIconProps>(
	function TablerChevronsLeftIcon(props, ref) {
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
				<path d="M11 17 L6 12 L11 7" />
				<path d="M18 17 L13 12 L18 7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChevronsLeftIcon.displayName = "TablerChevronsLeftIcon";
}
