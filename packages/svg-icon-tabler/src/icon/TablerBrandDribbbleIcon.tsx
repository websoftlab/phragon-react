import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandDribbbleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandDribbbleIcon = React.forwardRef<SVGSVGElement, TablerBrandDribbbleIconProps>(
	function TablerBrandDribbbleIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
				<path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4" />
				<path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandDribbbleIcon.displayName = "TablerBrandDribbbleIcon";
}
