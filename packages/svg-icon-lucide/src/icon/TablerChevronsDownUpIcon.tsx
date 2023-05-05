import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChevronsDownUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChevronsDownUpIcon = React.forwardRef<SVGSVGElement, TablerChevronsDownUpIconProps>(
	function TablerChevronsDownUpIcon(props, ref) {
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
				<path d="m7 20 5-5 5 5" />
				<path d="m7 4 5 5 5-5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChevronsDownUpIcon.displayName = "TablerChevronsDownUpIcon";
}
