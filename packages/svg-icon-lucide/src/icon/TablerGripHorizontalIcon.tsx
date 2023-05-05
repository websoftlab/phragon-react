import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGripHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGripHorizontalIcon = React.forwardRef<SVGSVGElement, TablerGripHorizontalIconProps>(
	function TablerGripHorizontalIcon(props, ref) {
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
				<path d="M13 9 A1 1 0 0 1 12 10 A1 1 0 0 1 11 9 A1 1 0 0 1 13 9" />
				<path d="M20 9 A1 1 0 0 1 19 10 A1 1 0 0 1 18 9 A1 1 0 0 1 20 9" />
				<path d="M6 9 A1 1 0 0 1 5 10 A1 1 0 0 1 4 9 A1 1 0 0 1 6 9" />
				<path d="M13 15 A1 1 0 0 1 12 16 A1 1 0 0 1 11 15 A1 1 0 0 1 13 15" />
				<path d="M20 15 A1 1 0 0 1 19 16 A1 1 0 0 1 18 15 A1 1 0 0 1 20 15" />
				<path d="M6 15 A1 1 0 0 1 5 16 A1 1 0 0 1 4 15 A1 1 0 0 1 6 15" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGripHorizontalIcon.displayName = "TablerGripHorizontalIcon";
}
