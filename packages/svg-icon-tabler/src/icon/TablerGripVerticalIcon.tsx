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
				<path d="M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGripVerticalIcon.displayName = "TablerGripVerticalIcon";
}
