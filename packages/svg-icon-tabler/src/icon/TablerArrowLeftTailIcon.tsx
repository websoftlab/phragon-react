import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowLeftTailIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowLeftTailIcon = React.forwardRef<SVGSVGElement, TablerArrowLeftTailIconProps>(
	function TablerArrowLeftTailIcon(props, ref) {
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
				<path d="M18 12h-15" />
				<path d="M6 9l-3 3l3 3" />
				<path d="M21 9l-3 3l3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowLeftTailIcon.displayName = "TablerArrowLeftTailIcon";
}
