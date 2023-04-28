import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlayerTrackPrevIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlayerTrackPrevIcon = React.forwardRef<SVGSVGElement, TablerPlayerTrackPrevIconProps>(
	function TablerPlayerTrackPrevIcon(props, ref) {
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
				<path d="M21 5v14l-8 -7z" />
				<path d="M10 5v14l-8 -7z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlayerTrackPrevIcon.displayName = "TablerPlayerTrackPrevIcon";
}
