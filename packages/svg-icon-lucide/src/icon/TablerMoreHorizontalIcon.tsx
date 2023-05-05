import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoreHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoreHorizontalIcon = React.forwardRef<SVGSVGElement, TablerMoreHorizontalIconProps>(
	function TablerMoreHorizontalIcon(props, ref) {
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
				<path d="M13 12 A1 1 0 0 1 12 13 A1 1 0 0 1 11 12 A1 1 0 0 1 13 12" />
				<path d="M20 12 A1 1 0 0 1 19 13 A1 1 0 0 1 18 12 A1 1 0 0 1 20 12" />
				<path d="M6 12 A1 1 0 0 1 5 13 A1 1 0 0 1 4 12 A1 1 0 0 1 6 12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoreHorizontalIcon.displayName = "TablerMoreHorizontalIcon";
}
