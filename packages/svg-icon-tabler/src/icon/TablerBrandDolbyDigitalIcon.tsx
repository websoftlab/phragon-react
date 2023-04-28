import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandDolbyDigitalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandDolbyDigitalIcon = React.forwardRef<SVGSVGElement, TablerBrandDolbyDigitalIconProps>(
	function TablerBrandDolbyDigitalIcon(props, ref) {
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
				<path d="M21 6v12h-.89c-3.34 0 -6.047 -2.686 -6.047 -6s2.707 -6 6.046 -6h.891z" />
				<path d="M3.063 6v12h.891c3.34 0 6.046 -2.686 6.046 -6s-2.707 -6 -6.046 -6h-.89z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandDolbyDigitalIcon.displayName = "TablerBrandDolbyDigitalIcon";
}
