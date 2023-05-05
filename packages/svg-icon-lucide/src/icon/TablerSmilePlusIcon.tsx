import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSmilePlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSmilePlusIcon = React.forwardRef<SVGSVGElement, TablerSmilePlusIconProps>(
	function TablerSmilePlusIcon(props, ref) {
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
				<path d="M22 11v1a10 10 0 1 1-9-10" />
				<path d="M8 14s1.5 2 4 2 4-2 4-2" />
				<path d="M9 9 L9.01 9" />
				<path d="M15 9 L15.01 9" />
				<path d="M16 5h6" />
				<path d="M19 2v6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSmilePlusIcon.displayName = "TablerSmilePlusIcon";
}
