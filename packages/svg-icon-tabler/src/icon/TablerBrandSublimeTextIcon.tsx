import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandSublimeTextIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandSublimeTextIcon = React.forwardRef<SVGSVGElement, TablerBrandSublimeTextIconProps>(
	function TablerBrandSublimeTextIcon(props, ref) {
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
				<path d="M19 8l-14 4.5v-5.5l14 -4.5z" />
				<path d="M19 17l-14 4.5v-5.5l14 -4.5z" />
				<path d="M19 11.5l-14 -4.5" />
				<path d="M5 12.5l14 4.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandSublimeTextIcon.displayName = "TablerBrandSublimeTextIcon";
}
