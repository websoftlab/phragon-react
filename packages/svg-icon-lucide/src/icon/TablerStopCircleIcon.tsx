import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStopCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStopCircleIcon = React.forwardRef<SVGSVGElement, TablerStopCircleIconProps>(
	function TablerStopCircleIcon(props, ref) {
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
				<path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12" />
				<path d="M9 9 H15 V15 H9 V9 z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerStopCircleIcon.displayName = "TablerStopCircleIcon";
}
