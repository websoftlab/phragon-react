import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoreVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoreVerticalIcon = React.forwardRef<SVGSVGElement, TablerMoreVerticalIconProps>(
	function TablerMoreVerticalIcon(props, ref) {
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
				<path d="M13 5 A1 1 0 0 1 12 6 A1 1 0 0 1 11 5 A1 1 0 0 1 13 5" />
				<path d="M13 19 A1 1 0 0 1 12 20 A1 1 0 0 1 11 19 A1 1 0 0 1 13 19" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoreVerticalIcon.displayName = "TablerMoreVerticalIcon";
}
