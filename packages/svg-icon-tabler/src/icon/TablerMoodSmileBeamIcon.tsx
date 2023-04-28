import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodSmileBeamIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodSmileBeamIcon = React.forwardRef<SVGSVGElement, TablerMoodSmileBeamIconProps>(
	function TablerMoodSmileBeamIcon(props, ref) {
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
				<path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
				<path d="M10 10c-.5 -1 -2.5 -1 -3 0" />
				<path d="M17 10c-.5 -1 -2.5 -1 -3 0" />
				<path d="M14.5 15a3.5 3.5 0 0 1 -5 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoodSmileBeamIcon.displayName = "TablerMoodSmileBeamIcon";
}
