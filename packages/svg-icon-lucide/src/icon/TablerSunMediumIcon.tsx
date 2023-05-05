import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSunMediumIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSunMediumIcon = React.forwardRef<SVGSVGElement, TablerSunMediumIconProps>(
	function TablerSunMediumIcon(props, ref) {
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
				<path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
				<path d="M12 3v1" />
				<path d="M12 20v1" />
				<path d="M3 12h1" />
				<path d="M20 12h1" />
				<path d="m18.364 5.636-.707.707" />
				<path d="m6.343 17.657-.707.707" />
				<path d="m5.636 5.636.707.707" />
				<path d="m17.657 17.657.707.707" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSunMediumIcon.displayName = "TablerSunMediumIcon";
}
