import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClockPlayIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClockPlayIcon = React.forwardRef<SVGSVGElement, TablerClockPlayIconProps>(
	function TablerClockPlayIcon(props, ref) {
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
				<path d="M12 7v5l2 2" />
				<path d="M17 22l5 -3l-5 -3z" />
				<path d="M13.017 20.943a9 9 0 1 1 7.831 -7.292" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClockPlayIcon.displayName = "TablerClockPlayIcon";
}
