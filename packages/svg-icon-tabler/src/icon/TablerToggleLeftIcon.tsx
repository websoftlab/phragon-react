import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerToggleLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerToggleLeftIcon = React.forwardRef<SVGSVGElement, TablerToggleLeftIconProps>(
	function TablerToggleLeftIcon(props, ref) {
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
				<path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M2 6m0 6a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6v0a6 6 0 0 1 -6 6h-8a6 6 0 0 1 -6 -6z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerToggleLeftIcon.displayName = "TablerToggleLeftIcon";
}
