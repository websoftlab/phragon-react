import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowAutofitWidthIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowAutofitWidthIcon = React.forwardRef<SVGSVGElement, TablerArrowAutofitWidthIconProps>(
	function TablerArrowAutofitWidthIcon(props, ref) {
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
				<path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
				<path d="M10 18h-7" />
				<path d="M21 18h-7" />
				<path d="M6 15l-3 3l3 3" />
				<path d="M18 15l3 3l-3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowAutofitWidthIcon.displayName = "TablerArrowAutofitWidthIcon";
}
