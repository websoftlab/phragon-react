import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDisabled2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDisabled2Icon = React.forwardRef<SVGSVGElement, TablerDisabled2IconProps>(
	function TablerDisabled2Icon(props, ref) {
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
				<path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M9 11a5 5 0 1 0 3.95 7.95" />
				<path d="M19 20l-4 -5h-4l3 -5l-4 -3l-4 1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDisabled2Icon.displayName = "TablerDisabled2Icon";
}
