import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerIndentIncreaseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerIndentIncreaseIcon = React.forwardRef<SVGSVGElement, TablerIndentIncreaseIconProps>(
	function TablerIndentIncreaseIcon(props, ref) {
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
				<path d="M20 6l-11 0" />
				<path d="M20 12l-7 0" />
				<path d="M20 18l-11 0" />
				<path d="M4 8l4 4l-4 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerIndentIncreaseIcon.displayName = "TablerIndentIncreaseIcon";
}
