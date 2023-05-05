import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChevronsRightLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChevronsRightLeftIcon = React.forwardRef<SVGSVGElement, TablerChevronsRightLeftIconProps>(
	function TablerChevronsRightLeftIcon(props, ref) {
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
				<path d="m20 17-5-5 5-5" />
				<path d="m4 17 5-5-5-5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChevronsRightLeftIcon.displayName = "TablerChevronsRightLeftIcon";
}
