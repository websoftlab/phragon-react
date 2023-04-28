import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsSplitIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsSplitIcon = React.forwardRef<SVGSVGElement, TablerArrowsSplitIconProps>(
	function TablerArrowsSplitIcon(props, ref) {
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
				<path d="M21 17h-8l-3.5 -5h-6.5" />
				<path d="M21 7h-8l-3.495 5" />
				<path d="M18 10l3 -3l-3 -3" />
				<path d="M18 20l3 -3l-3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsSplitIcon.displayName = "TablerArrowsSplitIcon";
}
