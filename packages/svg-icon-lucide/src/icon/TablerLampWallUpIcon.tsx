import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLampWallUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLampWallUpIcon = React.forwardRef<SVGSVGElement, TablerLampWallUpIconProps>(
	function TablerLampWallUpIcon(props, ref) {
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
				<path d="M11 4h6l3 7H8l3-7Z" />
				<path d="M14 11v5a2 2 0 0 1-2 2H8" />
				<path d="M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLampWallUpIcon.displayName = "TablerLampWallUpIcon";
}
