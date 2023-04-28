import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandGoogleHomeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandGoogleHomeIcon = React.forwardRef<SVGSVGElement, TablerBrandGoogleHomeIconProps>(
	function TablerBrandGoogleHomeIcon(props, ref) {
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
				<path d="M19.072 21h-14.144a1.928 1.928 0 0 1 -1.928 -1.928v-6.857c0 -.512 .203 -1 .566 -1.365l7.07 -7.063a1.928 1.928 0 0 1 2.727 0l7.071 7.063c.363 .362 .566 .853 .566 1.365v6.857a1.928 1.928 0 0 1 -1.928 1.928z" />
				<path d="M7 13v4h10v-4l-5 -5" />
				<path d="M14.8 5.2l-11.8 11.8" />
				<path d="M7 17v4" />
				<path d="M17 17v4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandGoogleHomeIcon.displayName = "TablerBrandGoogleHomeIcon";
}
