import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGenderBigenderIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGenderBigenderIcon = React.forwardRef<SVGSVGElement, TablerGenderBigenderIconProps>(
	function TablerGenderBigenderIcon(props, ref) {
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
				<path d="M11 11m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
				<path d="M19 3l-5 5" />
				<path d="M15 3h4v4" />
				<path d="M11 16v6" />
				<path d="M8 19h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGenderBigenderIcon.displayName = "TablerGenderBigenderIcon";
}
