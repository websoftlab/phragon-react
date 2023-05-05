import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRotateCcwIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRotateCcwIcon = React.forwardRef<SVGSVGElement, TablerRotateCcwIconProps>(
	function TablerRotateCcwIcon(props, ref) {
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
				<path d="M3 2v6h6" />
				<path d="M3 13a9 9 0 1 0 3-7.7L3 8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRotateCcwIcon.displayName = "TablerRotateCcwIcon";
}
