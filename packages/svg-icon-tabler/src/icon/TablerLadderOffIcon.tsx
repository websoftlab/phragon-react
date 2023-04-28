import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLadderOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLadderOffIcon = React.forwardRef<SVGSVGElement, TablerLadderOffIconProps>(
	function TablerLadderOffIcon(props, ref) {
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
				<path d="M8 3v1m0 4v13" />
				<path d="M16 3v9m0 4v5" />
				<path d="M8 14h6" />
				<path d="M8 10h2m4 0h2" />
				<path d="M10 6h6" />
				<path d="M8 18h8" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLadderOffIcon.displayName = "TablerLadderOffIcon";
}
