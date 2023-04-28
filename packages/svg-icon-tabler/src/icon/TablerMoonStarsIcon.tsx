import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoonStarsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoonStarsIcon = React.forwardRef<SVGSVGElement, TablerMoonStarsIconProps>(
	function TablerMoonStarsIcon(props, ref) {
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
				<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
				<path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
				<path d="M19 11h2m-1 -1v2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoonStarsIcon.displayName = "TablerMoonStarsIcon";
}
