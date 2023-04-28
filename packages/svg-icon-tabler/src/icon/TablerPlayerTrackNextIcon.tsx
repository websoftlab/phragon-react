import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlayerTrackNextIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlayerTrackNextIcon = React.forwardRef<SVGSVGElement, TablerPlayerTrackNextIconProps>(
	function TablerPlayerTrackNextIcon(props, ref) {
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
				<path d="M3 5v14l8 -7z" />
				<path d="M14 5v14l8 -7z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlayerTrackNextIcon.displayName = "TablerPlayerTrackNextIcon";
}
