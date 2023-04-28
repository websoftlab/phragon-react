import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandUnsplashIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandUnsplashIcon = React.forwardRef<SVGSVGElement, TablerBrandUnsplashIconProps>(
	function TablerBrandUnsplashIcon(props, ref) {
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
				<path d="M4 11h5v4h6v-4h5v9h-16zm5 -7h6v4h-6z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandUnsplashIcon.displayName = "TablerBrandUnsplashIcon";
}
