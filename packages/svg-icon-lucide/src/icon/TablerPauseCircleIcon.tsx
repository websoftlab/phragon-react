import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPauseCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPauseCircleIcon = React.forwardRef<SVGSVGElement, TablerPauseCircleIconProps>(
	function TablerPauseCircleIcon(props, ref) {
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
				<path d="M10 15 L10 9" />
				<path d="M14 15 L14 9" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPauseCircleIcon.displayName = "TablerPauseCircleIcon";
}
