import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGripVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGripVerticalIcon = React.forwardRef<SVGSVGElement, TablerGripVerticalIconProps>(
	function TablerGripVerticalIcon(props, ref) {
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
				<path d="M10 12 A1 1 0 0 1 9 13 A1 1 0 0 1 8 12 A1 1 0 0 1 10 12" />
				<path d="M10 5 A1 1 0 0 1 9 6 A1 1 0 0 1 8 5 A1 1 0 0 1 10 5" />
				<path d="M10 19 A1 1 0 0 1 9 20 A1 1 0 0 1 8 19 A1 1 0 0 1 10 19" />
				<path d="M16 12 A1 1 0 0 1 15 13 A1 1 0 0 1 14 12 A1 1 0 0 1 16 12" />
				<path d="M16 5 A1 1 0 0 1 15 6 A1 1 0 0 1 14 5 A1 1 0 0 1 16 5" />
				<path d="M16 19 A1 1 0 0 1 15 20 A1 1 0 0 1 14 19 A1 1 0 0 1 16 19" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGripVerticalIcon.displayName = "TablerGripVerticalIcon";
}
