import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSplitSquareVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSplitSquareVerticalIcon = React.forwardRef<SVGSVGElement, TablerSplitSquareVerticalIconProps>(
	function TablerSplitSquareVerticalIcon(props, ref) {
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
				<path d="M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" />
				<path d="M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" />
				<path d="M4 12 L20 12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSplitSquareVerticalIcon.displayName = "TablerSplitSquareVerticalIcon";
}
