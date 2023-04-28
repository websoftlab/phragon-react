import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandNytimesIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandNytimesIcon = React.forwardRef<SVGSVGElement, TablerBrandNytimesIconProps>(
	function TablerBrandNytimesIcon(props, ref) {
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
				<path d="M11.036 5.058a8 8 0 1 0 8.706 9.965" />
				<path d="M12 21v-11l-7.5 4" />
				<path d="M17.5 3a2.5 2.5 0 1 1 0 5l-11 -5a2.5 2.5 0 0 0 -.67 4.91" />
				<path d="M9 12v8" />
				<path d="M16 13h-.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandNytimesIcon.displayName = "TablerBrandNytimesIcon";
}
