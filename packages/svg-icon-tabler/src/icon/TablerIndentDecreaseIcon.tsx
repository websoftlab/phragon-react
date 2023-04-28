import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerIndentDecreaseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerIndentDecreaseIcon = React.forwardRef<SVGSVGElement, TablerIndentDecreaseIconProps>(
	function TablerIndentDecreaseIcon(props, ref) {
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
				<path d="M20 6l-7 0" />
				<path d="M20 12l-9 0" />
				<path d="M20 18l-7 0" />
				<path d="M8 8l-4 4l4 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerIndentDecreaseIcon.displayName = "TablerIndentDecreaseIcon";
}
