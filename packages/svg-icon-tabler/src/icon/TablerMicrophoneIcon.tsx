import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMicrophoneIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMicrophoneIcon = React.forwardRef<SVGSVGElement, TablerMicrophoneIconProps>(
	function TablerMicrophoneIcon(props, ref) {
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
				<path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z" />
				<path d="M5 10a7 7 0 0 0 14 0" />
				<path d="M8 21l8 0" />
				<path d="M12 17l0 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMicrophoneIcon.displayName = "TablerMicrophoneIcon";
}
