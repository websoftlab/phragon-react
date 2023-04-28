import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowAutofitContentIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowAutofitContentIcon = React.forwardRef<SVGSVGElement, TablerArrowAutofitContentIconProps>(
	function TablerArrowAutofitContentIcon(props, ref) {
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
				<path d="M6 4l-3 3l3 3" />
				<path d="M18 4l3 3l-3 3" />
				<path d="M4 14m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
				<path d="M10 7h-7" />
				<path d="M21 7h-7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowAutofitContentIcon.displayName = "TablerArrowAutofitContentIcon";
}
