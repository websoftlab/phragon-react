import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandGooglePlayIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandGooglePlayIcon = React.forwardRef<SVGSVGElement, TablerBrandGooglePlayIconProps>(
	function TablerBrandGooglePlayIcon(props, ref) {
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
				<path d="M4 3.71v16.58a.7 .7 0 0 0 1.05 .606l14.622 -8.42a.55 .55 0 0 0 0 -.953l-14.622 -8.419a.7 .7 0 0 0 -1.05 .607z" />
				<path d="M15 9l-10.5 11.5" />
				<path d="M4.5 3.5l10.5 11.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandGooglePlayIcon.displayName = "TablerBrandGooglePlayIcon";
}
