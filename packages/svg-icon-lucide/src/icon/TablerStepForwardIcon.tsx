import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStepForwardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStepForwardIcon = React.forwardRef<SVGSVGElement, TablerStepForwardIconProps>(
	function TablerStepForwardIcon(props, ref) {
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
				<path d="M6 4 L6 20" />
				<path d="M10 4 L20 12 L10 20Z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerStepForwardIcon.displayName = "TablerStepForwardIcon";
}
