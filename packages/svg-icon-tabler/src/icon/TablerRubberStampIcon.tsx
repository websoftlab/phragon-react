import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRubberStampIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRubberStampIcon = React.forwardRef<SVGSVGElement, TablerRubberStampIconProps>(
	function TablerRubberStampIcon(props, ref) {
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
				<path d="M21 17.85h-18c0 -4.05 1.421 -4.05 3.79 -4.05c5.21 0 1.21 -4.59 1.21 -6.8a4 4 0 1 1 8 0c0 2.21 -4 6.8 1.21 6.8c2.369 0 3.79 0 3.79 4.05z" />
				<path d="M5 21h14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRubberStampIcon.displayName = "TablerRubberStampIcon";
}
