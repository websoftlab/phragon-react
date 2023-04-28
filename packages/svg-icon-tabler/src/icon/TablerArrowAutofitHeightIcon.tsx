import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowAutofitHeightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowAutofitHeightIcon = React.forwardRef<SVGSVGElement, TablerArrowAutofitHeightIconProps>(
	function TablerArrowAutofitHeightIcon(props, ref) {
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
				<path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6" />
				<path d="M18 14v7" />
				<path d="M18 3v7" />
				<path d="M15 18l3 3l3 -3" />
				<path d="M15 6l3 -3l3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowAutofitHeightIcon.displayName = "TablerArrowAutofitHeightIcon";
}
